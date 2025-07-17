import { FileText, Wand2, Download } from "lucide-react";

export function About() {
  const steps = [
    {
      icon: FileText,
      title: "Input Your Details",
      description:
        "Provide your information, job details, and upload your resume",
    },
    {
      icon: Wand2,
      title: "AI Generates Content",
      description:
        "Our AI analyzes your data and creates a personalized cover letter",
    },
    {
      icon: Download,
      title: "Download & Apply",
      description:
        "Review, edit if needed, and download your professional cover letter",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground mb-16 max-w-2xl mx-auto">
            Create professional cover letters in three simple steps using the
            power of AI
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <div className="w-full h-0.5 bg-border"></div>
                    <div className="absolute right-0 top-0 w-2 h-2 bg-primary rounded-full transform translate-x-1 -translate-y-0.75"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
