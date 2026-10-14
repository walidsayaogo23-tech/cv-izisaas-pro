import React from 'react';
import {
  Mail as LucideMail,
  Phone as LucidePhone,
  Download as LucideDownload,
  MessageCircle as LucideMessageCircle,
  ChevronDown as LucideChevronDown,
  ExternalLink as LucideExternalLink,
  Menu as LucideMenu,
  X as LucideX,
  Code2 as LucideCode2,
  Shield as LucideShield,
  Palette as LucidePalette,
  Terminal as LucideTerminal,
  Video as LucideVideo,
  Sparkles as LucideSparkles,
  Send as LucideSend,
  Briefcase as LucideBriefcase,
  DollarSign as LucideDollarSign,
  CheckCircle2 as LucideCheckCircle2,
  MapPin as LucideMapPin,
  Calendar as LucideCalendar,
  Building2 as LucideBuilding2,
  User as LucideUser,
  Clock as LucideClock,
  ArrowUpRight as LucideArrowUpRight,
  Check as LucideCheck,
  Award as LucideAward
} from 'lucide-react';

export const Mail = LucideMail;
export const Phone = LucidePhone;
export const Download = LucideDownload;
export const MessageCircle = LucideMessageCircle;
export const ChevronDown = LucideChevronDown;
export const ExternalLink = LucideExternalLink;
export const Menu = LucideMenu;
export const X = LucideX;
export const Code2 = LucideCode2;
export const Shield = LucideShield;
export const Palette = LucidePalette;
export const Terminal = LucideTerminal;
export const Video = LucideVideo;
export const Sparkles = LucideSparkles;
export const Send = LucideSend;
export const Briefcase = LucideBriefcase;
export const DollarSign = LucideDollarSign;
export const CheckCircle2 = LucideCheckCircle2;
export const MapPin = LucideMapPin;
export const Calendar = LucideCalendar;
export const Building2 = LucideBuilding2;
export const User = LucideUser;
export const Clock = LucideClock;
export const ArrowUpRight = LucideArrowUpRight;
export const Check = LucideCheck;
export const Award = LucideAward;

// Custom crisp SVG for Github with identical interface
export const Github = ({ size = 20, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export default {
  Mail, Phone, Github, Download, MessageCircle, ChevronDown,
  ExternalLink, Menu, X, Code2, Shield, Palette, Terminal, Video,
  Sparkles, Send, Briefcase, DollarSign, CheckCircle2, MapPin,
  Calendar, Building2, User, Clock, ArrowUpRight, Check, Award
};
