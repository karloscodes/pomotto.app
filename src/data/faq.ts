// FAQ data with simplified structure
export const faqItems = [
  {
    question: "How's Pomotto different?",
    answer: "No ticking clock nagging you, Pomotto uses gentle chimes and flashes to cue breaks. Built for deep focus, not distraction.",
    bullets: [
      "Mac Do Not Disturb sync, dive in, uninterrupted.",
      "Smart filtering, key alerts, no noise.",
      "No countdown stress, just flow.",
      "One-time buy, no subscription trap."
    ]
  },
  {
    question: "Subscription or one-time?",
    answer: "One-time purchase. Pay once, own it, no subscriptions, no fees.",
    secondaryText: "Built to last with free updates forever. I'm not here to lock you in."
  },
  {
    question: "Mac-only?",
    answer: "Yes, macOS only. No Windows or mobile plans.",
    secondaryText: "Nailing one platform beats half-assing three. Ties tight with Mac's native tools, simplicity over sprawl."
  },
  {
    question: "How does it help hyper-focused?",
    answer: "Pomotto harnesses hyper-focus, keeps you locked in without losing balance.",
    bullets: [
      "Halts endless runs—keeps you present.",
      "Pulls you back from rabbit holes.",
      "Cues breaks to sustain energy.",
      "Mac Do Not Disturb filters noise, keeps essentials."
    ]
  },
  {
    question: "What if I hate breaks?",
    answer: "Breaks feel off, but they sharpen focus—science backs it.",
    bullets: [
      "Tune break length to fit you.",
      "Skip when you're in the zone.",
      "Ease into your rhythm."
    ],
    link: {
      text: "why breaks win",
      url: "/why-pomotto"
    }
  }
];

// Generate schema.org structured data from the FAQ items
export const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqItems.map(item => {
    let fullAnswer = item.answer;

    if (item.bullets) {
      fullAnswer = `${fullAnswer} ${item.bullets.join(" ")}`;
    }

    if (item.secondaryText) {
      fullAnswer = `${fullAnswer} ${item.secondaryText}`;
    }

    return {
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": fullAnswer
      }
    };
  })
}; 
