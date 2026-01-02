"use client"

import React, { useState, useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRouter } from "next/navigation"
import type { User } from "@supabase/supabase-js"
import { createClient } from "@/lib/supabase/client"

interface FinalTestViewProps {
  pathway: {
    id: number
    title: string
    description: string
    order_number: number
    type: string
    content: any
  }
  user: User
}

export default function FinalTestView({ pathway, user }: FinalTestViewProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)
  const [isCompleting, setIsCompleting] = useState(false)
  const [timeLeft, setTimeLeft] = useState(600) // 10 menit dalam detik
  const [testStarted, setTestStarted] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  // Get questions from pathway.content (same as quiz system)
  const questions = pathway.content?.questions || []

  // Format waktu menjadi MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  // Ref untuk handleSubmit agar bisa dipanggil dari timer
  const handleSubmitRef = useRef<(() => Promise<void>) | null>(null)

  // Timer effect - countdown dan auto-submit jika waktu habis
  useEffect(() => {
    if (!testStarted || showResults) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          // Auto submit ketika waktu habis
          handleSubmitRef.current?.()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [testStarted, showResults])

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = optionIndex
    setAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmit = async () => {
    let correctCount = 0
    questions.forEach((q: any, index: number) => {
      if (answers[index] === q.correct_answer) {
        correctCount++
      }
    })

    const finalScore = Math.round((correctCount / questions.length) * 100)
    setScore(finalScore)
    setShowResults(true)

    for (let i = 0; i < questions.length; i++) {
      const question = questions[i]
      const userAnswer = answers[i]
      const isCorrect = userAnswer === question.correct_answer
      
      // Create explanation with correct/wrong feedback (use question.explanation from database)
      const baseExplanation = question.explanation || "Silakan pelajari kembali materi terkait."
      const explanation = isCorrect
        ? `✓ Jawaban Anda benar!\n\n${baseExplanation}`
        : `✗ Jawaban Anda salah.\n\nJawaban yang benar adalah: ${question.options[question.correct_answer]}\n\n${baseExplanation}`

      await supabase
        .from("quiz_answers")
        .delete()
        .eq("pathway_id", pathway.id)
        .eq("user_id", user.id)
        .eq("question_id", question.id)

      await supabase
        .from("quiz_answers")
        .insert({
          pathway_id: pathway.id,
          user_id: user.id,
          question_id: question.id,
          user_answer: userAnswer ?? -1,
          correct_answer: question.correct_answer,
          is_correct: isCorrect,
          explanation: explanation
        })
    }

    await supabase
      .from("user_pathway_progress")
      .update({ score: finalScore, status: "completed" })
      .eq("pathway_id", pathway.id)
      .eq("user_id", user.id)
  }

  // Assign ref untuk timer auto-submit
  handleSubmitRef.current = handleSubmit

  const handleComplete = async () => {
    setIsCompleting(true)
    try {
      console.log('[Client] Completing pathway:', pathway.id)
      
      const response = await fetch('/api/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pathwayId: pathway.id,
          status: 'completed',
          score: score
        })
      })

      const data = await response.json()
      console.log('[Client] API Response:', data)

      if (!response.ok) {
        throw new Error(data.error || 'Gagal menyelesaikan pembelajaran')
      }

      if (data.nextPathwayId) {
        console.log('[Client] Going to next pathway:', data.nextPathwayId)
        router.push(`/pathway/${data.nextPathwayId}`)
        router.refresh() 
      } else {
        console.log('[Client] No next pathway, going to dashboard')
        router.push('/dashboard')
        router.refresh() 
      }
    } catch (error) {
      console.error('[Client] Error:', error)
      alert(`Gagal menyelesaikan pembelajaran: ${error instanceof Error ? error.message : 'Unknown error'}`)
    } finally {
      setIsCompleting(false)
    }
  }

  const handleStartTest = () => {
    setTestStarted(true)
    setTimeLeft(600) // Reset timer ke 10 menit
  }

  // Tampilan sebelum tes dimulai
  if (!testStarted) {
    return (
      <article className="space-y-6">
        <header>
          <Card className="p-8 bg-gradient-to-br from-red-50 to-orange-50 border-red-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{pathway.title}</h2>
            <p className="text-gray-600 mb-6">{pathway.description}</p>
            
            <div className="bg-white/80 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">📋 Informasi Tes</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-red-500">⏱️</span>
                  <span>Batas waktu: <strong>10 menit</strong></span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-500">📝</span>
                  <span>Jumlah soal: <strong>{questions.length} pertanyaan</strong></span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-500">⚠️</span>
                  <span>Tes akan otomatis dikumpulkan jika waktu habis</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✅</span>
                  <span>Anda dapat berpindah antar soal selama waktu masih tersisa</span>
                </li>
              </ul>
            </div>

            <Button 
              onClick={handleStartTest}
              className="w-full bg-red-600 hover:bg-red-700 text-lg py-6"
            >
              🚀 Mulai Tes Akhir
            </Button>
          </Card>
        </header>
      </article>
    )
  }

  if (showResults) {
    const correctCount = answers.filter((a, i) => a === questions[i]?.correct_answer).length

    return (
      <article className="space-y-6">
        <header>
          <Card className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hasil Tes Akhir</h2>
            <div className="text-center">
              <div className="text-6xl font-bold text-purple-600 mb-4">{score}%</div>
              <p className="text-lg text-gray-700 mb-2">
                Anda menjawab {correctCount} dari {questions.length} pertanyaan dengan benar
              </p>
              <p className="text-gray-600">
                {score >= 80
                  ? "Selamat! Anda telah menguasai materi Chemical Bonding dengan baik."
                  : score >= 60
                    ? "Bagus! Anda sudah memahami sebagian besar materi. Pelajari kembali bagian yang kurang."
                    : "Anda perlu mempelajari kembali materi Chemical Bonding."}
              </p>
              <p className="text-sm text-indigo-600 mt-4">
                💡 Lihat pembahasan lengkap di halaman &quot;Hasil Pembelajaran&quot;
              </p>
            </div>
          </Card>
        </header>

        <nav>
          <Button 
            className="w-full bg-indigo-600 hover:bg-indigo-700"
            onClick={handleComplete}
            disabled={isCompleting}
          >
            {isCompleting ? 'Menyimpan...' : 'Kembali ke Dashboard'}
          </Button>
        </nav>
      </article>
    )
  }

  const question = questions[currentQuestion]

  return (
    <article className="space-y-6">
      <header>
        <Card className="p-8 bg-gradient-to-br from-red-50 to-orange-50 border-red-200">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-3xl font-bold text-gray-900">{pathway.title}</h2>
            {/* Timer Display */}
            <div className={`px-4 py-2 rounded-lg font-mono text-xl font-bold ${
              timeLeft <= 60 
                ? 'bg-red-100 text-red-600 animate-pulse' 
                : timeLeft <= 180 
                  ? 'bg-amber-100 text-amber-600' 
                  : 'bg-green-100 text-green-600'
            }`}>
              ⏱️ {formatTime(timeLeft)}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-lg text-gray-700">
              Pertanyaan {currentQuestion + 1} dari {questions.length}
            </p>
            <div className="w-32 bg-gray-200 rounded-full h-2">
              <div
                className="bg-red-500 h-2 rounded-full transition-all"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>
          {/* Peringatan waktu hampir habis */}
          {timeLeft <= 60 && (
            <div className="mt-4 p-3 bg-red-100 border border-red-300 rounded-lg text-red-700 text-sm">
              ⚠️ Waktu hampir habis! Segera selesaikan tes Anda.
            </div>
          )}
        </Card>
      </header>

      <section>
        <Card className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">{question?.question}</h3>

          <div className="space-y-3 mb-6">
            {question?.options?.map((option: string, index: number) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                  answers[currentQuestion] === index
                    ? "border-purple-600 bg-purple-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      answers[currentQuestion] === index ? "border-purple-600 bg-purple-600" : "border-gray-300"
                    }`}
                  >
                    {answers[currentQuestion] === index && <span className="text-white text-sm">✓</span>}
                  </div>
                  <span className="text-gray-900">{option}</span>
                </div>
              </button>
            ))}
          </div>

          <nav className="flex gap-4">
          <Button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            variant="outline"
            className="flex-1 bg-transparent"
          >
            Sebelumnya
          </Button>
          {currentQuestion < questions.length - 1 ? (
            <Button onClick={handleNext} className="flex-1 bg-purple-600 hover:bg-purple-700">
              Selanjutnya
            </Button>
          ) : (
            <Button onClick={handleSubmit} className="flex-1 bg-green-600 hover:bg-green-700">
              Selesai & Lihat Hasil
            </Button>
          )}
          </nav>
        </Card>
      </section>
    </article>
  )
}
