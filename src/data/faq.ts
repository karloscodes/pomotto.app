// FAQ data structure with complete content from Hero.astro
export const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How's Pomotto different?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No ticking clock nagging you, Pomotto uses gentle chimes and flashes to cue breaks. Built for deep focus, not distraction. Mac Do Not Disturb sync, dive in, uninterrupted. Smart filtering, key alerts, no noise. No countdown stress, just flow. One-time buy, no subscription trap."
      },
      // Additional data for display in the Hero component
      "display": {
        "paragraphs": [
          "No ticking clock nagging you, Pomotto uses gentle chimes and flashes to cue breaks. Built for deep focus, not distraction."
        ],
        "bullets": [
          "Mac Do Not Disturb sync, dive in, uninterrupted.",
          "Smart filtering, key alerts, no noise.",
          "No countdown stress, just flow.",
          "One-time buy, no subscription trap."
        ]
      }
    },
    {
      "@type": "Question",
      "name": "Subscription or one-time?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "One-time purchase. Pay once, own it, no subscriptions, no fees. Built to last with free updates forever. I'm not here to lock you in."
      },
      "display": {
        "paragraphs": [
          "One-time purchase. Pay once, own it, no subscriptions, no fees.",
          "Built to last with free updates forever. I'm not here to lock you in."
        ]
      }
    },
    {
      "@type": "Question",
      "name": "Mac-only?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, macOS only. No Windows or mobile plans. Nailing one platform beats half-assing three. Ties tight with Mac's native tools, simplicity over sprawl."
      },
      "display": {
        "paragraphs": [
          "Yes, macOS only. No Windows or mobile plans.",
          "Nailing one platform beats half-assing three. Ties tight with Mac's native tools, simplicity over sprawl."
        ]
      }
    },
    {
      "@type": "Question",
      "name": "How does it help hyper-focused?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pomotto harnesses hyper-focus, keeps you locked in without losing balance. Halts endless runs—keeps you present. Pulls you back from rabbit holes. Cues breaks to sustain energy. Mac Do Not Disturb filters noise, keeps essentials."
      },
      "display": {
        "paragraphs": [
          "Pomotto harnesses hyper-focus, keeps you locked in without losing balance."
        ],
        "bullets": [
          "Halts endless runs—keeps you present.",
          "Pulls you back from rabbit holes.",
          "Cues breaks to sustain energy.",
          "Mac Do Not Disturb filters noise, keeps essentials."
        ]
      }
    },
    {
      "@type": "Question",
      "name": "What if I hate breaks?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Breaks feel off, but they sharpen focus—science backs it. Tune break length to fit you. Skip when you're in the zone. Ease into your rhythm."
      },
      "display": {
        "paragraphs": [
          "Breaks feel off, but they sharpen focus—science backs it."
        ],
        "bullets": [
          "Tune break length to fit you.",
          "Skip when you're in the zone.",
          "Ease into your rhythm."
        ],
        "links": [
          {
            "text": "why breaks win",
            "url": "/why-pomotto"
          }
        ]
      }
    }
  ]
}; 
