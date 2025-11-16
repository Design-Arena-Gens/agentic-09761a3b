const scenes = [
  {
    time: "0–3 sec",
    heading: "Sardi aa chuki hai…",
    voiceover: "“सर्दियाँ फिर दस्तक दे चुकी हैं…”",
    visuals: ["Soft emotional music", "Falling snow overlay", "Warm morning light"],
    description:
      "Opening frame that hints at the arrival of winter with a gentle glow and minimal typography."
  },
  {
    time: "4–8 sec",
    heading: "Immersion rod reveal",
    voiceover: "“और अब सुबह-सुबह गरम पानी… हर घर की ज़रूरत बन चुका है।”",
    visuals: ["Immersion rod on clean white background", "Steam wisps rising", "Subtle product shine"],
    description:
      "Product-centred hero shot that positions the immersion rod as the morning essential."
  },
  {
    time: "9–14 sec",
    heading: "Close-up on heating coil",
    voiceover: "“आपके परिवार की सुरक्षा और आराम के लिए… चुनिए भरोसेमंद क्वालिटी का immersion rod।”",
    visuals: ["Macro shot of copper coil", "Protective water ripple", "Golden light accents"],
    description:
      "Detailed look at the heating coil underscoring strength, trust, and family protection."
  },
  {
    time: "15–20 sec",
    heading: "Feature highlights",
    voiceover:
      "“Laxmi Narayan Bartan Bhandar लाया है बेहतरीन quality का immersion rod… जो पानी को मिनटों में गरम कर दे।”",
    visuals: ["Shock-proof", "Fast Heating", "Heavy Duty Coil"],
    description:
      "Three quick-hit feature cards with icons that reinforce reliability, speed, and durability."
  },
  {
    time: "21–26 sec",
    heading: "Price spotlight",
    voiceover: "“और सबसे बड़ी बात… कीमत सिर्फ ₹250 से शुरू!”",
    visuals: ["Large ₹250 typography", "Animated price burst", "Limited time ribbon"],
    description:
      "Bold, celebratory price reveal on clean white background to drive urgency and value."
  },
  {
    time: "27–30 sec",
    heading: "Brand sign-off",
    voiceover:
      "“इस सर्दी… घर लाएँ गरमाहट और भरोसा. Laxmi Narayan Bartan Bhandar.”",
    visuals: ["Store branding lockup", "Contact number", "Soft warm gradient fade-out"],
    description:
      "Closing brand frame with clear contact details and a gentle outro mood."
  }
];

export default function Page() {
  return (
    <main>
      <section className="hero">
        <span className="eyebrow">
          सर्दी में गरमाहट
          <span aria-hidden="true">•</span>
          Trusted Immersion Rod
        </span>
        <h1>Storyboard & Audio Map for Laxmi Narayan Immersion Rod Video</h1>
        <p>
          A 30-second concept film that walks viewers from the first chill of winter to the warmth,
          safety, and value of the Laxmi Narayan Bartan Bhandar immersion rod. Use this storyboard
          and script alignment to guide your shoot, animation, or motion design.
        </p>
        <a className="cta" href="tel:+918586949325">
          अभी कॉल करें — 8586949325
        </a>
      </section>

      <section className="timeline">
        {scenes.map((scene) => (
          <article key={scene.time} className="scene-card">
            <div className="scene-header">
              <span className="scene-time">{scene.time}</span>
              <h2>{scene.heading}</h2>
            </div>

            <p className="scene-voiceover">{scene.voiceover}</p>

            <div className="scene-visual" role="presentation">
              <div>
                <strong>{scene.heading}</strong>
                <p>{scene.description}</p>
              </div>
            </div>

            <div className="scene-tags" aria-label="Suggested visuals">
              {scene.visuals.map((tag) => (
                <span key={tag} className="scene-tag">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="brand-block">
        <h2>Starting Now — सिर्फ ₹250 से!</h2>
        <div className="brand-grid">
          <div className="price">₹250</div>
          <div className="contact">
            <span>Laxmi Narayan Bartan Bhandar</span>
            <a href="tel:+918586949325">8586949325</a>
          </div>
        </div>
        <p>
          Bring home the warmth, safety, and reliability your family deserves this winter season.
          Ready for immediate pickup and delivery.
        </p>
      </section>
    </main>
  );
}
