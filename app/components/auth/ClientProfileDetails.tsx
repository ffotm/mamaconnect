"use client";

import { useState } from "react";
import MultiSelectInput from "@/app/components/auth/MultiSelectInput";

function CalendarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function MedicalIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M12 10v6" />
      <path d="M9 13h6" />
    </svg>
  );
}

function AllergyIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    </svg>
  );
}

function PregnancyIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="3" />
      <path d="M12 8c-3 0-5 2-5 5v3a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3c0-3-2-5-5-5z" />
      <path d="M10 22v-4" />
      <path d="M14 22v-4" />
    </svg>
  );
}

function BloodTypeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L8 8a5 5 0 1 0 8 0L12 2z" />
    </svg>
  );
}

const ILLNESS_OPTIONS = [
  "Diabetes",
  "Hypertension",
  "Thyroid disorders",
  "Asthma",
  "Heart conditions",
  "None",
];

const ALLERGY_OPTIONS = [
  "Medication allergy",
  "Food allergy",
  "Latex allergy",
  "Pollen allergy",
  "Dust allergy",
  "None",
];

const BLOOD_TYPE_OPTIONS = ["A+", "A−", "B+", "B−", "AB+", "AB−", "O+", "O−"];

function ArrowLeftIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  );
}

interface ClientProfileDetailsProps {
  onBack?: () => void;
  onContinue?: (data: {
    birthday: string;
    bloodType: string;
    conditions: string[];
    allergies: string[];
    pregnancyStage: string;
  }) => void;
}

export default function ClientProfileDetails({ onBack, onContinue }: ClientProfileDetailsProps) {
  const [birthday, setBirthday] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [conditions, setConditions] = useState<string[]>([]);
  const [allergies, setAllergies] = useState<string[]>([]);
  const [pregnancyStage, setPregnancyStage] = useState("");
  const [birthdayError, setBirthdayError] = useState("");
  const [bloodTypeError, setBloodTypeError] = useState("");
  const [conditionsError, setConditionsError] = useState("");
  const [allergiesError, setAllergiesError] = useState("");
  const [pregnancyError, setPregnancyError] = useState("");

  function handleSubmit() {
    const bdErr  = birthday       ? "" : "Date of birth is required";
    const btErr  = bloodType      ? "" : "Blood type is required";
    const condErr = conditions.length > 0 ? "" : "Please select at least one option";
    const algErr  = allergies.length > 0  ? "" : "Please select at least one option";
    const pregErr = pregnancyStage ? "" : "Pregnancy date is required";
    setBirthdayError(bdErr);
    setBloodTypeError(btErr);
    setConditionsError(condErr);
    setAllergiesError(algErr);
    setPregnancyError(pregErr);
    if (bdErr || btErr || condErr || algErr || pregErr) return;
    onContinue?.({ birthday, bloodType, conditions, allergies, pregnancyStage });
  }

  return (
    <div className="w-full">
      <button
        onClick={onBack}
        className="flex items-center gap-1 text-sm text-gray-500 hover:text-[#F46A6A] transition-colors mb-3"
      >
        <ArrowLeftIcon />
        <span>Back to Sign up</span>
      </button>
      <h1 className="text-2xl font-bold text-gray-900 leading-tight">Profile Details</h1>
      <p className="text-sm text-gray-500 mt-1 mb-5">Tell us a bit more about yourself</p>

      {/* Birthday */}
      <div className="mb-3.5">
        <label className="block text-xs font-medium text-gray-500 mb-1.5">When is your birthday?</label>
        <div className="relative">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
            <CalendarIcon />
          </span>
          <input
            type="date"
            placeholder="Your birthday"
            value={birthday}
            onChange={(e) => { setBirthday(e.target.value); if (birthdayError) setBirthdayError(""); }}
            required
            className={`w-full rounded-xl border ${birthdayError ? "border-red-400" : "border-gray-200"} h-11 pl-11 pr-4 text-sm text-gray-800 outline-none focus:border-[#F46A6A] focus:ring-1 focus:ring-[#F46A6A]/20 transition-all placeholder:text-gray-300`}
          />
        </div>
        {birthdayError && <p className="text-xs text-red-500 mt-1">{birthdayError}</p>}
      </div>

      {/* Blood Type */}
      <div className="mb-3.5">
        <label className="block text-xs font-medium text-gray-500 mb-1.5">What is your blood type?</label>
        <div className="relative">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 z-10 pointer-events-none">
            <BloodTypeIcon />
          </span>
          <select
            value={bloodType}
            onChange={(e) => { setBloodType(e.target.value); if (bloodTypeError) setBloodTypeError(""); }}
            required
            className={`w-full rounded-xl border ${bloodTypeError ? "border-red-400" : "border-gray-200"} h-11 pl-11 pr-4 text-sm text-gray-800 outline-none focus:border-[#F46A6A] focus:ring-1 focus:ring-[#F46A6A]/20 transition-all appearance-none bg-white`}
          >
            <option value="" disabled>Select blood type</option>
            {BLOOD_TYPE_OPTIONS.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        {bloodTypeError && <p className="text-xs text-red-500 mt-1">{bloodTypeError}</p>}
      </div>

      {/* Medical Conditions - Multi Select */}
      <MultiSelectInput
        label="Do you have illnesses?"
        placeholder="Select your illnesses"
        options={ILLNESS_OPTIONS}
        selected={conditions}
        onChange={(val) => { setConditions(val); if (conditionsError) setConditionsError(""); }}
        icon={<MedicalIcon />}
        error={conditionsError}
      />

      {/* Allergies - Multi Select */}
      <MultiSelectInput
        label="Do you have any allergies?"
        placeholder="Select your allergies"
        options={ALLERGY_OPTIONS}
        selected={allergies}
        onChange={(val) => { setAllergies(val); if (allergiesError) setAllergiesError(""); }}
        icon={<AllergyIcon />}
        error={allergiesError}
      />

      {/* Pregnancy Stage */}
      <div className="mb-4">
        <label className="block text-xs font-medium text-gray-500 mb-1.5">Time of pregnancy</label>
        <div className="relative">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
            <PregnancyIcon />
          </span>
          <input
            type="date"
            placeholder="Pregnancy date"
            value={pregnancyStage}
            onChange={(e) => { setPregnancyStage(e.target.value); if (pregnancyError) setPregnancyError(""); }}
            required
            className={`w-full rounded-xl border ${pregnancyError ? "border-red-400" : "border-gray-200"} h-11 pl-11 pr-4 text-sm text-gray-800 outline-none focus:border-[#F46A6A] focus:ring-1 focus:ring-[#F46A6A]/20 transition-all placeholder:text-gray-300`}
          />
        </div>
        {pregnancyError && <p className="text-xs text-red-500 mt-1">{pregnancyError}</p>}
      </div>

      {/* Continue button */}
      <button
        onClick={handleSubmit}
        className="w-full bg-[#F46A6A] text-white rounded-full h-11 font-semibold text-sm hover:bg-[#e55d5d] active:bg-[#d45252] transition-colors"
      >
        Continue
      </button>
    </div>
  );
}
