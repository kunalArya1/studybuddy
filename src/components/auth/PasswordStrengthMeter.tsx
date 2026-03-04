interface PasswordStrengthProps {
  password: string;
}

export default function PasswordStrengthMeter({
  password,
}: PasswordStrengthProps) {
  const getPasswordStrength = (pass: string) => {
    if (pass.length === 0) return { strength: 0, label: "", color: "" };
    if (pass.length < 6)
      return { strength: 1, label: "Weak", color: "bg-red-500" };
    if (pass.length < 10)
      return { strength: 2, label: "Fair", color: "bg-yellow-500" };
    if (pass.length >= 10 && /[A-Z]/.test(pass) && /[0-9]/.test(pass)) {
      return { strength: 4, label: "Strong", color: "bg-emerald-500" };
    }
    return { strength: 3, label: "Good", color: "bg-blue-500" };
  };

  const strengthData = getPasswordStrength(password);

  if (!password) return null;

  return (
    <div className="space-y-1.5">
      <div className="flex gap-1">
        {[1, 2, 3, 4].map((level) => (
          <div
            key={level}
            className={`h-1 flex-1 rounded-full transition-all duration-300 ${
              level <= strengthData.strength
                ? strengthData.color
                : "bg-neutral-200"
            }`}
          />
        ))}
      </div>
      <p className="text-xs text-neutral-500">
        Password strength:{" "}
        <span
          className={`font-medium ${
            strengthData.strength >= 3
              ? "text-emerald-600"
              : strengthData.strength >= 2
                ? "text-yellow-600"
                : "text-red-600"
          }`}
        >
          {strengthData.label}
        </span>
      </p>
    </div>
  );
}
