"use client";

import { useState } from "react";

// Mock data
const achievements = [
  // Learning Milestones
  {
    id: 1,
    title: "First Steps",
    description: "Complete your first lesson",
    icon: "🎯",
    category: "Milestones",
    earned: true,
    earnedDate: "Oct 15, 2025",
    rarity: "Common",
    points: 10,
  },
  {
    id: 2,
    title: "Getting Started",
    description: "Enroll in your first course",
    icon: "🚀",
    category: "Milestones",
    earned: true,
    earnedDate: "Oct 15, 2025",
    rarity: "Common",
    points: 10,
  },
  {
    id: 3,
    title: "Course Graduate",
    description: "Complete your first course",
    icon: "🎓",
    category: "Milestones",
    earned: true,
    earnedDate: "Jan 15, 2026",
    rarity: "Uncommon",
    points: 50,
  },
  {
    id: 4,
    title: "Certified Pro",
    description: "Earn your first certificate",
    icon: "🏆",
    category: "Milestones",
    earned: true,
    earnedDate: "Jan 15, 2026",
    rarity: "Uncommon",
    points: 75,
  },
  {
    id: 5,
    title: "Knowledge Seeker",
    description: "Enroll in 10 courses",
    icon: "📚",
    category: "Milestones",
    earned: false,
    earnedDate: null,
    rarity: "Rare",
    points: 100,
    progress: 80,
    target: 10,
    current: 8,
  },
  {
    id: 6,
    title: "Learning Master",
    description: "Complete 1000 lessons",
    icon: "🧠",
    category: "Milestones",
    earned: false,
    earnedDate: null,
    rarity: "Legendary",
    points: 500,
    progress: 7.2,
    target: 1000,
    current: 72,
  },

  // Streaks
  {
    id: 7,
    title: "Week Warrior",
    description: "Learn for 7 days in a row",
    icon: "🔥",
    category: "Streaks",
    earned: true,
    earnedDate: "Feb 10, 2026",
    rarity: "Common",
    points: 25,
  },
  {
    id: 8,
    title: "Two Week Champion",
    description: "Learn for 14 days in a row",
    icon: "💪",
    category: "Streaks",
    earned: false,
    earnedDate: null,
    rarity: "Uncommon",
    points: 50,
    progress: 85,
    target: 14,
    current: 12,
  },
  {
    id: 9,
    title: "Month Marathon",
    description: "Learn for 30 days in a row",
    icon: "⭐",
    category: "Streaks",
    earned: false,
    earnedDate: null,
    rarity: "Rare",
    points: 150,
    progress: 40,
    target: 30,
    current: 12,
  },
  {
    id: 10,
    title: "Unstoppable",
    description: "Learn for 100 days in a row",
    icon: "🌟",
    category: "Streaks",
    earned: false,
    earnedDate: null,
    rarity: "Legendary",
    points: 500,
    progress: 12,
    target: 100,
    current: 12,
  },

  // Performance
  {
    id: 11,
    title: "Quick Learner",
    description: "Complete 10 lessons in one day",
    icon: "⚡",
    category: "Performance",
    earned: true,
    earnedDate: "Dec 20, 2025",
    rarity: "Uncommon",
    points: 30,
  },
  {
    id: 12,
    title: "Perfectionist",
    description: "Score 100% on 5 quizzes",
    icon: "💯",
    category: "Performance",
    earned: false,
    earnedDate: null,
    rarity: "Rare",
    points: 100,
    progress: 60,
    target: 5,
    current: 3,
  },
  {
    id: 13,
    title: "Speed Demon",
    description: "Complete a course in under a week",
    icon: "🏎️",
    category: "Performance",
    earned: false,
    earnedDate: null,
    rarity: "Rare",
    points: 100,
  },
  {
    id: 14,
    title: "Night Owl",
    description: "Study between midnight and 4 AM",
    icon: "🦉",
    category: "Performance",
    earned: true,
    earnedDate: "Nov 5, 2025",
    rarity: "Common",
    points: 15,
  },

  // Social
  {
    id: 15,
    title: "Helpful Hand",
    description: "Answer 10 questions in discussions",
    icon: "🤝",
    category: "Social",
    earned: false,
    earnedDate: null,
    rarity: "Uncommon",
    points: 40,
    progress: 30,
    target: 10,
    current: 3,
  },
  {
    id: 16,
    title: "Reviewer",
    description: "Leave a review for 5 courses",
    icon: "📝",
    category: "Social",
    earned: false,
    earnedDate: null,
    rarity: "Common",
    points: 20,
    progress: 40,
    target: 5,
    current: 2,
  },
];

const categories = ["All", "Milestones", "Streaks", "Performance", "Social"];

const rarityColors: Record<string, string> = {
  Common: "bg-neutral-100 text-neutral-600",
  Uncommon: "bg-green-100 text-green-700",
  Rare: "bg-blue-100 text-blue-700",
  Legendary: "bg-amber-100 text-amber-700",
};

export default function AchievementsPage() {
  const [filter, setFilter] = useState("All");
  const [showEarned, setShowEarned] = useState<"all" | "earned" | "locked">(
    "all"
  );

  const filteredAchievements = achievements.filter((a) => {
    const categoryMatch = filter === "All" || a.category === filter;
    const earnedMatch =
      showEarned === "all" ||
      (showEarned === "earned" && a.earned) ||
      (showEarned === "locked" && !a.earned);
    return categoryMatch && earnedMatch;
  });

  const totalPoints = achievements
    .filter((a) => a.earned)
    .reduce((sum, a) => sum + a.points, 0);
  const earnedCount = achievements.filter((a) => a.earned).length;

  return (
    <>
      {/* Stats Banner */}
      <div className="bg-neutral-900 rounded-2xl p-6 mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-neutral-800 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center">
              <span className="text-4xl">🏆</span>
            </div>
            <div>
              <p className="text-sm text-neutral-400 mb-1">Total Points</p>
              <p className="text-4xl font-bold text-white mb-1">
                {totalPoints.toLocaleString()}
              </p>
              <p className="text-sm text-neutral-400">
                {earnedCount} of {achievements.length} achievements unlocked
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(rarityColors).map(([rarity]) => {
              const count = achievements.filter(
                (a) => a.rarity === rarity && a.earned
              ).length;
              const total = achievements.filter(
                (a) => a.rarity === rarity
              ).length;
              return (
                <div key={rarity} className="text-center">
                  <p className="text-2xl font-semibold text-white">
                    {count}/{total}
                  </p>
                  <p className="text-xs text-neutral-400">{rarity}</p>
                </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-colors ${
                    filter === category
                      ? "bg-neutral-900 text-white"
                      : "bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowEarned("all")}
                className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                  showEarned === "all"
                    ? "bg-neutral-200 text-neutral-900"
                    : "text-neutral-500 hover:bg-neutral-100"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setShowEarned("earned")}
                className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                  showEarned === "earned"
                    ? "bg-neutral-200 text-neutral-900"
                    : "text-neutral-500 hover:bg-neutral-100"
                }`}
              >
                Earned
              </button>
              <button
                onClick={() => setShowEarned("locked")}
                className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                  showEarned === "locked"
                    ? "bg-neutral-200 text-neutral-900"
                    : "text-neutral-500 hover:bg-neutral-100"
                }`}
              >
                Locked
              </button>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredAchievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`bg-white rounded-2xl border p-5 transition-all ${
                  achievement.earned
                    ? "border-neutral-200 hover:border-neutral-300 hover:shadow-lg"
                    : "border-dashed border-neutral-300 opacity-60"
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center text-3xl ${
                      achievement.earned ? "bg-neutral-100" : "bg-neutral-50"
                    }`}
                  >
                    {achievement.icon}
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span
                      className={`px-2 py-0.5 rounded text-xs font-medium ${rarityColors[achievement.rarity]}`}
                    >
                      {achievement.rarity}
                    </span>
                    <span className="text-xs text-neutral-400">
                      +{achievement.points} pts
                    </span>
                  </div>
                </div>
                <h3 className="font-semibold text-neutral-900 mb-1">
                  {achievement.title}
                </h3>
                <p className="text-sm text-neutral-500 mb-3">
                  {achievement.description}
                </p>
                {achievement.earned ? (
                  <div className="flex items-center gap-2 text-xs text-green-600">
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Earned on {achievement.earnedDate}
                  </div>
                ) : achievement.progress !== undefined ? (
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-neutral-500">Progress</span>
                      <span className="text-neutral-900 font-medium">
                        {achievement.current}/{achievement.target}
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-neutral-200 rounded-full">
                      <div
                        className="h-full bg-neutral-400 rounded-full"
                        style={{ width: `${achievement.progress}%` }}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-xs text-neutral-400">
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
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                    Locked
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredAchievements.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-lg font-medium text-neutral-900 mb-2">
                No achievements found
              </h3>
              <p className="text-neutral-500">
                Try adjusting your filters to see more achievements
              </p>
            </div>
          )}
    </>
  );
}
