import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy, Download, RefreshCw } from "lucide-react";

export function OutputSection() {
  const sampleCoverLetter = `Dear Hiring Manager,

I am writing to express my strong interest in the Software Engineer position at Google. With my extensive experience in full-stack development and passion for innovative technology solutions, I am excited about the opportunity to contribute to your team.

Throughout my career, I have developed expertise in React, Node.js, Python, and cloud technologies. My recent project involved building a scalable web application that served over 100,000 users, where I implemented efficient algorithms and optimized performance by 40%.

I am particularly drawn to Google's commitment to technological innovation and your focus on creating products that positively impact billions of users worldwide. My experience with machine learning and AI aligns perfectly with your company's direction in these areas.

I would welcome the opportunity to discuss how my technical skills and enthusiasm for problem-solving can contribute to Google's continued success. Thank you for considering my application.

Sincerely,
John Doe`;

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Your Generated Cover Letter
            </h2>
            <p className="text-lg text-muted-foreground">
              Review, edit, and download your personalized cover letter
            </p>
          </div>

          <Card className="shadow-lg border-0 bg-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-6">
              <CardTitle className="text-xl text-foreground">
                Cover Letter Preview
              </CardTitle>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center space-x-2"
                >
                  <Copy className="h-4 w-4" />
                  <span>Copy</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center space-x-2"
                >
                  <Download className="h-4 w-4" />
                  <span>Download PDF</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center space-x-2"
                >
                  <RefreshCw className="h-4 w-4" />
                  <span>Regenerate</span>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-white p-8 rounded-lg border border-border font-serif leading-relaxed">
                <div className="whitespace-pre-line text-foreground">
                  {sampleCoverLetter}
                </div>
              </div>
              <div className="mt-6 flex justify-center">
                <Button className="bg-primary text-white hover:bg-primary/90 px-8 py-3">
                  Download Final Version
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
