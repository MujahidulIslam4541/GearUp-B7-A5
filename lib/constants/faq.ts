export interface FaqItem {
  id: string
  question: string
  answer: string
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq-1",
    question: "How does renting sports & outdoor gear work on GearUp?",
    answer:
      "Find the equipment you need, select your rental dates, and reserve online. Pick up the gear directly from the verified provider or coordinate delivery, enjoy your adventure, and return it upon completion.",
  },
  {
    id: "faq-2",
    question: "What happens if gear is damaged during my rental period?",
    answer:
      "All rentals include standard wear-and-tear protection. If accidental damage occurs, report it promptly through your dashboard. Our transparent GearUp Guarantee helps resolve any claims fairly.",
  },
  {
    id: "faq-3",
    question: "Is the equipment inspected and sanitized before pickup?",
    answer:
      "Yes. All providers follow a mandatory safety and sanitation checklist. Equipment is inspected, cleaned, and tested before handover to ensure top safety and reliability.",
  },
  {
    id: "faq-4",
    question: "Can I extend or cancel my reservation?",
    answer:
      "You can cancel for free up to 24 hours before your booking start time. Extensions can also be requested directly from your active bookings dashboard, subject to provider availability.",
  },
  {
    id: "faq-5",
    question: "How can I list my own gear and earn as a provider?",
    answer:
      "Sign up for a provider account, submit your ID for swift verification, and create listings with photos, daily rates, and availability. GearUp handles secure payment processing and borrower verification.",
  },
]
