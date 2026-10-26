import React from "react";
import {
  Clock,
  Droplets,
  Car,
  Briefcase,
  Coffee,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export type IconName =
  | "clock"
  | "droplets"
  | "car"
  | "briefcase"
  | "coffee"
  | "shield-check"
  | string;

export function getIcon(name: IconName): React.ComponentType<{ className?: string }> {
  switch (name) {
    case "clock":
      return Clock;
    case "droplets":
      return Droplets;
    case "car":
      return Car;
    case "briefcase":
      return Briefcase;
    case "coffee":
      return Coffee;
    case "shield-check":
      return ShieldCheck;
    default:
      return Sparkles;
  }
}
