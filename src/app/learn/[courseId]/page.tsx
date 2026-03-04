"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Mock course data
const courseData = {
  id: "1",
  title: "Advanced React Patterns & Best Practices",
  instructor: {
    name: "Sarah Chen",
    avatar: "SC",
    title: "Senior Staff Engineer at Meta",
  },
  progress: 42,
  totalDuration: "12h 45m",
  completedDuration: "5h 20m",
  totalLessons: 48,
  completedLessons: 20,
  rating: 4.9,
  students: 12547,
  lastUpdated: "January 2026",
  description:
    "Master advanced React patterns including compound components, render props, custom hooks, and state management patterns used by top tech companies.",
  chapters: [
    {
      id: 1,
      title: "Getting Started",
      duration: "45m",
      lessons: [
        {
          id: 1,
          title: "Course Introduction & Setup",
          duration: "8:24",
          completed: true,
          type: "video",
        },
        {
          id: 2,
          title: "Project Structure Overview",
          duration: "12:15",
          completed: true,
          type: "video",
        },
        {
          id: 3,
          title: "Development Environment",
          duration: "15:30",
          completed: true,
          type: "video",
        },
        {
          id: 4,
          title: "Course Resources",
          duration: "5:00",
          completed: true,
          type: "resource",
        },
      ],
    },
    {
      id: 2,
      title: "Compound Components Pattern",
      duration: "1h 30m",
      lessons: [
        {
          id: 5,
          title: "Understanding Compound Components",
          duration: "18:45",
          completed: true,
          type: "video",
        },
        {
          id: 6,
          title: "Building a Flexible Tab System",
          duration: "22:30",
          completed: true,
          type: "video",
        },
        {
          id: 7,
          title: "Implicit State Sharing",
          duration: "16:20",
          completed: true,
          type: "video",
        },
        {
          id: 8,
          title: "Quiz: Compound Components",
          duration: "10:00",
          completed: false,
          type: "quiz",
        },
      ],
    },
    {
      id: 3,
      title: "Render Props Pattern",
      duration: "1h 15m",
      lessons: [
        {
          id: 9,
          title: "Render Props Fundamentals",
          duration: "20:15",
          completed: true,
          type: "video",
          current: true,
        },
        {
          id: 10,
          title: "Building Reusable Logic",
          duration: "18:30",
          completed: false,
          type: "video",
        },
        {
          id: 11,
          title: "Render Props vs Hooks",
          duration: "15:45",
          completed: false,
          type: "video",
        },
        {
          id: 12,
          title: "Practice Exercise",
          duration: "20:00",
          completed: false,
          type: "exercise",
        },
      ],
    },
    {
      id: 4,
      title: "Custom Hooks Deep Dive",
      duration: "2h 00m",
      lessons: [
        {
          id: 13,
          title: "Custom Hook Patterns",
          duration: "25:00",
          completed: false,
          type: "video",
        },
        {
          id: 14,
          title: "useReducer Patterns",
          duration: "22:15",
          completed: false,
          type: "video",
        },
        {
          id: 15,
          title: "Building useFetch Hook",
          duration: "28:30",
          completed: false,
          type: "video",
        },
        {
          id: 16,
          title: "Hook Composition",
          duration: "24:15",
          completed: false,
          type: "video",
        },
        {
          id: 17,
          title: "Project: Custom Hook Library",
          duration: "20:00",
          completed: false,
          type: "project",
        },
      ],
    },
    {
      id: 5,
      title: "State Management Patterns",
      duration: "2h 30m",
      lessons: [
        {
          id: 18,
          title: "Context API Mastery",
          duration: "26:00",
          completed: false,
          type: "video",
        },
        {
          id: 19,
          title: "State Machines with XState",
          duration: "32:30",
          completed: false,
          type: "video",
        },
        {
          id: 20,
          title: "Zustand Patterns",
          duration: "24:00",
          completed: false,
          type: "video",
        },
        {
          id: 21,
          title: "Server State with React Query",
          duration: "28:30",
          completed: false,
          type: "video",
        },
        {
          id: 22,
          title: "Final Project",
          duration: "30:00",
          completed: false,
          type: "project",
        },
      ],
    },
  ],
};

const notes = [
  {
    id: 1,
    timestamp: "2:34",
    content: "Important: Render props are still useful for specific scenarios",
    lessonId: 9,
  },
  {
    id: 2,
    timestamp: "8:15",
    content: "Remember to memoize the render prop function",
    lessonId: 9,
  },
];

const questions = [
  {
    id: 1,
    user: "Michael Torres",
    avatar: "MT",
    question:
      "Is there a performance difference between render props and hooks?",
    answers: 3,
    votes: 12,
    time: "2 days ago",
  },
  {
    id: 2,
    user: "Emily Watson",
    avatar: "EW",
    question: "How do you handle error boundaries with render props?",
    answers: 5,
    votes: 8,
    time: "1 week ago",
  },
];

const resources = [
  {
    id: 1,
    title: "Render Props Cheat Sheet",
    type: "pdf",
    size: "245 KB",
  },
  {
    id: 2,
    title: "Starter Code - Lesson 9",
    type: "zip",
    size: "1.2 MB",
  },
  {
    id: 3,
    title: "Official React Documentation",
    type: "link",
    url: "https://react.dev",
  },
];

// Get current lesson
const getCurrentLesson = () => {
  for (const chapter of courseData.chapters) {
    for (const lesson of chapter.lessons) {
      if (lesson.current) return { lesson, chapter };
    }
  }
  return {
    lesson: courseData.chapters[0].lessons[0],
    chapter: courseData.chapters[0],
  };
};

export default function CoursePlayerPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<
    "overview" | "notes" | "qa" | "resources"
  >("overview");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(124); // 2:04
  const [duration] = useState(1215); // 20:15
  const [volume, setVolume] = useState(80);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [showSpeedMenu, setShowSpeedMenu] = useState(false);
  const [expandedChapters, setExpandedChapters] = useState<number[]>([1, 2, 3]);
  const [newNote, setNewNote] = useState("");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  const { lesson: currentLesson, chapter: currentChapter } = getCurrentLesson();

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const progress = (currentTime / duration) * 100;

  const skipBackward = () => {
    setCurrentTime((prev) => Math.max(0, prev - 10));
  };

  const skipForward = () => {
    setCurrentTime((prev) => Math.min(duration, prev + 10));
  };

  const toggleFullscreen = async () => {
    if (!videoContainerRef.current) return;

    if (!document.fullscreenElement) {
      await videoContainerRef.current.requestFullscreen();
      setIsFullscreen(true);
    } else {
      await document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const toggleChapter = (chapterId: number) => {
    setExpandedChapters((prev) =>
      prev.includes(chapterId)
        ? prev.filter((id) => id !== chapterId)
        : [...prev, chapterId],
    );
  };

  const getLessonIcon = (type: string, completed: boolean) => {
    if (completed) {
      return (
        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
          <svg
            className="w-3 h-3 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
      );
    }
    switch (type) {
      case "video":
        return (
          <svg
            className="w-5 h-5 text-neutral-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
      case "quiz":
        return (
          <svg
            className="w-5 h-5 text-neutral-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
      case "exercise":
      case "project":
        return (
          <svg
            className="w-5 h-5 text-neutral-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        );
      case "resource":
        return (
          <svg
            className="w-5 h-5 text-neutral-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-screen flex flex-col bg-[#fafafa]">
      {/* Top Header */}
      <header className="h-14 bg-neutral-900 flex items-center justify-between px-4 shrink-0">
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="text-sm font-medium">Back to Dashboard</span>
          </button>
          <div className="h-6 w-px bg-white/20" />
          <div className="flex items-center gap-3">
            <span className="text-white font-medium text-sm truncate max-w-md">
              {courseData.title}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{courseData.progress}% complete</span>
          </div>
          <div className="w-8 h-8 bg-linear-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-medium">JD</span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Main Content */}
        <div
          className={`flex-1 flex flex-col transition-all duration-300 overflow-y-auto ${sidebarOpen ? "mr-96" : "mr-0"}`}
        >
          {/* Video Player */}
          <div
            ref={videoContainerRef}
            className="relative bg-neutral-900 aspect-video w-full max-h-[60vh] shrink-0"
          >
            {/* Video Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-16 h-16 rounded-full bg-white flex items-center justify-center hover:scale-105 transition-transform"
                  >
                    {isPlaying ? (
                      <svg
                        className="w-6 h-6 text-neutral-900"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6 text-neutral-900 ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    )}
                  </button>
                </div>
                <p className="text-white/60 text-sm">
                  Click to {isPlaying ? "pause" : "play"}
                </p>
              </div>
            </div>

            {/* Video Controls Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 via-black/40 to-transparent p-4">
              {/* Progress Bar */}
              <div className="mb-4 group cursor-pointer">
                <div className="h-1 bg-white/20 rounded-full overflow-hidden group-hover:h-1.5 transition-all">
                  <div
                    className="h-full bg-white rounded-full relative"
                    style={{ width: `${progress}%` }}
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>

              {/* Control Buttons */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* Play/Pause */}
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="text-white hover:text-white/80 transition-colors"
                  >
                    {isPlaying ? (
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    )}
                  </button>

                  {/* Skip Back */}
                  <button
                    onClick={skipBackward}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"
                      />
                    </svg>
                  </button>

                  {/* Skip Forward */}
                  <button
                    onClick={skipForward}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z"
                      />
                    </svg>
                  </button>

                  {/* Volume */}
                  <div className="flex items-center gap-2 group">
                    <button className="text-white/70 hover:text-white transition-colors">
                      {volume === 0 ? (
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                          />
                        </svg>
                      )}
                    </button>
                    <div className="w-0 group-hover:w-20 overflow-hidden transition-all">
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={volume}
                        onChange={(e) => setVolume(Number(e.target.value))}
                        className="w-20 h-1 bg-white/20 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full"
                      />
                    </div>
                  </div>

                  {/* Time */}
                  <span className="text-white/70 text-sm font-mono">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  {/* Playback Speed */}
                  <div className="relative">
                    <button
                      onClick={() => setShowSpeedMenu(!showSpeedMenu)}
                      className="text-white/70 hover:text-white transition-colors text-sm font-medium"
                    >
                      {playbackSpeed}x
                    </button>
                    {showSpeedMenu && (
                      <div className="absolute bottom-full mb-2 right-0 bg-neutral-800 rounded-xl p-2 min-w-20">
                        {[0.5, 0.75, 1, 1.25, 1.5, 2].map((speed) => (
                          <button
                            key={speed}
                            onClick={() => {
                              setPlaybackSpeed(speed);
                              setShowSpeedMenu(false);
                            }}
                            className={`block w-full text-left px-3 py-1.5 rounded-lg text-sm transition-colors ${
                              playbackSpeed === speed
                                ? "bg-white text-neutral-900"
                                : "text-white/70 hover:text-white hover:bg-white/10"
                            }`}
                          >
                            {speed}x
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Settings */}
                  <button className="text-white/70 hover:text-white transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </button>

                  {/* Fullscreen */}
                  <button
                    onClick={toggleFullscreen}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                      />
                    </svg>
                  </button>

                  {/* Toggle Sidebar */}
                  <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Content Below Video */}
          <div className="flex-1 bg-[#fafafa]">
            <div className="px-6 py-6">
              {/* Lesson Info */}
              <div className="mb-8">
                <div className="flex items-center gap-2 text-sm text-neutral-500 mb-2">
                  <span>Chapter {currentChapter.id}</span>
                  <span>•</span>
                  <span>Lesson {currentLesson.id}</span>
                </div>
                <h1 className="text-2xl font-bold text-neutral-900 mb-4">
                  {currentLesson.title}
                </h1>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-neutral-900 rounded-full flex items-center justify-center text-white text-sm font-medium">
                      {courseData.instructor.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-neutral-900">
                        {courseData.instructor.name}
                      </p>
                      <p className="text-xs text-neutral-500">
                        {courseData.instructor.title}
                      </p>
                    </div>
                  </div>
                  <div className="h-8 w-px bg-neutral-200" />
                  <button className="flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                      />
                    </svg>
                    Bookmark
                  </button>
                  <button className="flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                      />
                    </svg>
                    Share
                  </button>
                </div>
              </div>

              {/* Tabs */}
              <div className="border-b border-neutral-200 mb-6">
                <nav className="flex gap-8">
                  {[
                    { id: "overview", label: "Overview" },
                    { id: "notes", label: "Notes", count: notes.length },
                    { id: "qa", label: "Q&A", count: questions.length },
                    {
                      id: "resources",
                      label: "Resources",
                      count: resources.length,
                    },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as typeof activeTab)}
                      className={`relative pb-4 text-sm font-medium transition-colors ${
                        activeTab === tab.id
                          ? "text-neutral-900"
                          : "text-neutral-500 hover:text-neutral-700"
                      }`}
                    >
                      {tab.label}
                      {tab.count !== undefined && (
                        <span
                          className={`ml-1.5 px-1.5 py-0.5 rounded text-xs ${
                            activeTab === tab.id
                              ? "bg-neutral-900 text-white"
                              : "bg-neutral-100 text-neutral-500"
                          }`}
                        >
                          {tab.count}
                        </span>
                      )}
                      {activeTab === tab.id && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-900" />
                      )}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Tab Content */}
              {activeTab === "overview" && (
                <div className="space-y-6">
                  <div className="prose prose-neutral max-w-none">
                    <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                      About this lesson
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      In this lesson, we&apos;ll explore the fundamentals of
                      render props pattern in React. You&apos;ll learn how
                      render props enable component composition and code reuse
                      through a function prop that a component uses to know what
                      to render.
                    </p>
                    <h4 className="text-md font-semibold text-neutral-900 mt-6 mb-3">
                      What you&apos;ll learn
                    </h4>
                    <ul className="space-y-2">
                      {[
                        "Understanding the render props pattern and its use cases",
                        "Implementing flexible components with render props",
                        "Comparing render props with other patterns like HOCs",
                        "Best practices for performance optimization",
                      ].map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-neutral-600"
                        >
                          <svg
                            className="w-5 h-5 text-green-500 shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Course Progress Card */}
                  <div className="bg-white rounded-2xl border border-neutral-200 p-6">
                    <h3 className="text-sm font-semibold text-neutral-900 mb-4">
                      Your Progress
                    </h3>
                    <div className="flex items-center gap-6">
                      <div className="relative w-20 h-20">
                        <svg className="w-20 h-20 -rotate-90">
                          <circle
                            cx="40"
                            cy="40"
                            r="36"
                            fill="none"
                            stroke="#f5f5f5"
                            strokeWidth="8"
                          />
                          <circle
                            cx="40"
                            cy="40"
                            r="36"
                            fill="none"
                            stroke="#171717"
                            strokeWidth="8"
                            strokeDasharray={`${courseData.progress * 2.26} 226`}
                            strokeLinecap="round"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-lg font-bold text-neutral-900">
                            {courseData.progress}%
                          </span>
                        </div>
                      </div>
                      <div className="flex-1 grid grid-cols-3 gap-4">
                        <div>
                          <p className="text-2xl font-bold text-neutral-900">
                            {courseData.completedLessons}
                          </p>
                          <p className="text-xs text-neutral-500">
                            of {courseData.totalLessons} lessons
                          </p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-neutral-900">
                            {courseData.completedDuration}
                          </p>
                          <p className="text-xs text-neutral-500">
                            of {courseData.totalDuration}
                          </p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-neutral-900">
                            3
                          </p>
                          <p className="text-xs text-neutral-500">
                            quizzes passed
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "notes" && (
                <div className="space-y-6">
                  {/* Add Note */}
                  <div className="bg-white rounded-2xl border border-neutral-200 p-4">
                    <div className="flex gap-3">
                      <span className="px-2 py-1 bg-neutral-100 rounded text-xs font-mono text-neutral-600">
                        {formatTime(currentTime)}
                      </span>
                      <input
                        type="text"
                        value={newNote}
                        onChange={(e) => setNewNote(e.target.value)}
                        placeholder="Add a note at current timestamp..."
                        className="flex-1 text-sm bg-transparent focus:outline-none"
                      />
                      <button className="px-4 py-1.5 bg-neutral-900 text-white rounded-lg text-sm font-medium hover:bg-neutral-800 transition-colors">
                        Add Note
                      </button>
                    </div>
                  </div>

                  {/* Notes List */}
                  <div className="space-y-3">
                    {notes.map((note) => (
                      <div
                        key={note.id}
                        className="bg-white rounded-2xl border border-neutral-200 p-4 group hover:border-neutral-300 transition-colors"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex gap-3">
                            <button className="px-2 py-1 bg-neutral-900 text-white rounded text-xs font-mono hover:bg-neutral-700 transition-colors">
                              {note.timestamp}
                            </button>
                            <p className="text-sm text-neutral-700">
                              {note.content}
                            </p>
                          </div>
                          <button className="opacity-0 group-hover:opacity-100 text-neutral-400 hover:text-red-500 transition-all">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "qa" && (
                <div className="space-y-6">
                  {/* Ask Question */}
                  <div className="bg-white rounded-2xl border border-neutral-200 p-4">
                    <textarea
                      placeholder="Ask a question about this lesson..."
                      rows={3}
                      className="w-full text-sm bg-transparent focus:outline-none resize-none"
                    />
                    <div className="flex justify-end mt-2">
                      <button className="px-4 py-2 bg-neutral-900 text-white rounded-xl text-sm font-medium hover:bg-neutral-800 transition-colors">
                        Post Question
                      </button>
                    </div>
                  </div>

                  {/* Questions List */}
                  <div className="space-y-4">
                    {questions.map((q) => (
                      <div
                        key={q.id}
                        className="bg-white rounded-2xl border border-neutral-200 p-5 hover:border-neutral-300 transition-colors cursor-pointer"
                      >
                        <div className="flex gap-4">
                          <div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center text-sm font-medium text-neutral-600 shrink-0">
                            {q.avatar}
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-neutral-900 mb-1">
                              {q.question}
                            </p>
                            <div className="flex items-center gap-4 text-xs text-neutral-500">
                              <span>{q.user}</span>
                              <span>•</span>
                              <span>{q.time}</span>
                              <span>•</span>
                              <span className="flex items-center gap-1">
                                <svg
                                  className="w-4 h-4"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                  />
                                </svg>
                                {q.answers} answers
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-col items-center gap-1">
                            <button className="text-neutral-400 hover:text-neutral-900 transition-colors">
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 15l7-7 7 7"
                                />
                              </svg>
                            </button>
                            <span className="text-sm font-medium text-neutral-700">
                              {q.votes}
                            </span>
                            <button className="text-neutral-400 hover:text-neutral-900 transition-colors">
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "resources" && (
                <div className="space-y-3">
                  {resources.map((resource) => (
                    <div
                      key={resource.id}
                      className="bg-white rounded-2xl border border-neutral-200 p-4 flex items-center justify-between hover:border-neutral-300 transition-colors group"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                            resource.type === "pdf"
                              ? "bg-red-50"
                              : resource.type === "zip"
                                ? "bg-yellow-50"
                                : "bg-blue-50"
                          }`}
                        >
                          {resource.type === "pdf" && (
                            <svg
                              className="w-6 h-6 text-red-500"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                              />
                            </svg>
                          )}
                          {resource.type === "zip" && (
                            <svg
                              className="w-6 h-6 text-yellow-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                              />
                            </svg>
                          )}
                          {resource.type === "link" && (
                            <svg
                              className="w-6 h-6 text-blue-500"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          )}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-neutral-900">
                            {resource.title}
                          </p>
                          <p className="text-xs text-neutral-500 uppercase">
                            {resource.type}{" "}
                            {resource.size && `• ${resource.size}`}
                          </p>
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-neutral-100 text-neutral-700 rounded-xl text-sm font-medium group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                        {resource.type === "link" ? "Open" : "Download"}
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar - Course Content */}
        <aside
          className={`fixed right-0 top-14 h-[calc(100vh-56px)] bg-white border-l border-neutral-200 transition-all duration-300 z-30 ${
            sidebarOpen ? "w-96 translate-x-0" : "w-96 translate-x-full"
          }`}
        >
          {/* Sidebar Header */}
          <div className="p-6 border-b border-neutral-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-neutral-900">Course Content</h2>
              <button
                onClick={() => setSidebarOpen(false)}
                className="p-1.5 hover:bg-neutral-100 rounded-lg transition-colors"
              >
                <svg
                  className="w-5 h-5 text-neutral-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Progress Bar */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-2 bg-neutral-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-neutral-900 rounded-full"
                  style={{ width: `${courseData.progress}%` }}
                />
              </div>
              <span className="text-sm font-medium text-neutral-600">
                {courseData.progress}%
              </span>
            </div>
            <p className="text-xs text-neutral-500 mt-2">
              {courseData.completedLessons} of {courseData.totalLessons} lessons
              completed
            </p>
          </div>

          {/* Chapters List */}
          <div className="overflow-y-auto h-[calc(100%-180px)]">
            {courseData.chapters.map((chapter) => (
              <div key={chapter.id} className="border-b border-neutral-100">
                {/* Chapter Header */}
                <button
                  onClick={() => toggleChapter(chapter.id)}
                  className="w-full p-4 flex items-center justify-between hover:bg-neutral-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <svg
                      className={`w-4 h-4 text-neutral-400 transition-transform ${
                        expandedChapters.includes(chapter.id) ? "rotate-90" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <div className="text-left">
                      <p className="text-sm font-medium text-neutral-900">
                        {chapter.id}. {chapter.title}
                      </p>
                      <p className="text-xs text-neutral-500">
                        {chapter.lessons.filter((l) => l.completed).length}/
                        {chapter.lessons.length} • {chapter.duration}
                      </p>
                    </div>
                  </div>
                  {chapter.lessons.every((l) => l.completed) && (
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  )}
                </button>

                {/* Lessons */}
                {expandedChapters.includes(chapter.id) && (
                  <div className="pb-2">
                    {chapter.lessons.map((lesson) => (
                      <Link
                        key={lesson.id}
                        href={`/learn/${courseData.id}?lesson=${lesson.id}`}
                        className={`flex items-center gap-3 px-4 py-3 mx-2 rounded-xl transition-colors ${
                          lesson.current
                            ? "bg-neutral-900 text-white"
                            : "hover:bg-neutral-50 text-neutral-700"
                        }`}
                      >
                        {getLessonIcon(lesson.type, lesson.completed)}
                        <div className="flex-1 min-w-0">
                          <p
                            className={`text-sm truncate ${lesson.current ? "font-medium" : ""}`}
                          >
                            {lesson.title}
                          </p>
                        </div>
                        <span
                          className={`text-xs shrink-0 ${lesson.current ? "text-white/70" : "text-neutral-400"}`}
                        >
                          {lesson.duration}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-neutral-200">
            <div className="flex gap-3">
              <button className="flex-1 px-4 py-2.5 border border-neutral-200 rounded-xl text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-colors flex items-center justify-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Previous
              </button>
              <button className="flex-1 px-4 py-2.5 bg-neutral-900 text-white rounded-xl text-sm font-medium hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2">
                Next
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </aside>

        {/* Toggle Sidebar Button (when sidebar is closed) */}
        {!sidebarOpen && (
          <button
            onClick={() => setSidebarOpen(true)}
            className="fixed right-4 top-1/2 -translate-y-1/2 p-3 bg-neutral-900 text-white rounded-xl shadow-lg hover:bg-neutral-800 transition-colors z-30"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
