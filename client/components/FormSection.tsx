import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Upload, FileText } from "lucide-react";

export function FormSection() {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [generationOptions, setGenerationOptions] = useState({
    coverLetter: true,
    email: false,
    followUp: false,
  });

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadedFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Create Your Cover Letter
            </h2>
            <p className="text-lg text-muted-foreground">
              Fill in your details and let AI craft the perfect cover letter for
              you
            </p>
          </div>

          <Card className="shadow-lg border-0 bg-card">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">
                Personal & Job Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-sm font-medium">
                    Full Name
                  </Label>
                  <Input
                    id="fullName"
                    placeholder="John Doe"
                    className="border-input focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@email.com"
                    className="border-input focus:border-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="jobTitle" className="text-sm font-medium">
                    Job Title
                  </Label>
                  <Input
                    id="jobTitle"
                    placeholder="Software Engineer"
                    className="border-input focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-sm font-medium">
                    Company Name
                  </Label>
                  <Input
                    id="company"
                    placeholder="Google"
                    className="border-input focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="skills" className="text-sm font-medium">
                  Skills & Experience
                </Label>
                <Textarea
                  id="skills"
                  placeholder="Describe your relevant skills, experience, and achievements..."
                  className="min-h-[120px] border-input focus:border-primary resize-none"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="jobDescription" className="text-sm font-medium">
                  Job Description
                </Label>
                <Textarea
                  id="jobDescription"
                  placeholder="Paste the job description here..."
                  className="min-h-[140px] border-input focus:border-primary resize-none"
                />
              </div>

              <div className="space-y-4">
                <Label className="text-sm font-medium">
                  What would you like to generate?
                </Label>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="coverLetter"
                      checked={generationOptions.coverLetter}
                      onCheckedChange={(checked) =>
                        setGenerationOptions((prev) => ({
                          ...prev,
                          coverLetter: checked as boolean,
                        }))
                      }
                    />
                    <Label
                      htmlFor="coverLetter"
                      className="text-sm font-normal cursor-pointer"
                    >
                      Cover Letter
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="email"
                      checked={generationOptions.email}
                      onCheckedChange={(checked) =>
                        setGenerationOptions((prev) => ({
                          ...prev,
                          email: checked as boolean,
                        }))
                      }
                    />
                    <Label
                      htmlFor="email"
                      className="text-sm font-normal cursor-pointer"
                    >
                      Professional Email
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="followUp"
                      checked={generationOptions.followUp}
                      onCheckedChange={(checked) =>
                        setGenerationOptions((prev) => ({
                          ...prev,
                          followUp: checked as boolean,
                        }))
                      }
                    />
                    <Label
                      htmlFor="followUp"
                      className="text-sm font-normal cursor-pointer"
                    >
                      Follow-up Email
                    </Label>
                  </div>
                </div>
                {!Object.values(generationOptions).some(Boolean) && (
                  <p className="text-sm text-destructive">
                    Please select at least one option to generate
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">Resume Upload</Label>
                <div
                  className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                    dragActive
                      ? "border-primary bg-primary/10"
                      : "border-border hover:border-primary"
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  onClick={() =>
                    document.getElementById("resume-upload")?.click()
                  }
                >
                  <input
                    id="resume-upload"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  {uploadedFile ? (
                    <div className="flex items-center justify-center space-x-2">
                      <FileText className="h-6 w-6 text-primary" />
                      <span className="text-foreground font-medium">
                        {uploadedFile.name}
                      </span>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <Upload className="h-8 w-8 text-muted-foreground mx-auto" />
                      <div className="text-muted-foreground">
                        <p className="font-medium">
                          Drag & drop your resume here, or click to browse
                        </p>
                        <p className="text-sm">PDF, DOC, DOCX up to 10MB</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">Preferred Tone</Label>
                <Select>
                  <SelectTrigger className="border-input focus:border-primary">
                    <SelectValue placeholder="Select a tone for your cover letter" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="friendly">Friendly</SelectItem>
                    <SelectItem value="confident">Confident</SelectItem>
                    <SelectItem value="creative">Creative</SelectItem>
                    <SelectItem value="formal">Formal</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="w-full bg-primary text-white hover:bg-primary/90 h-12 text-lg font-semibold rounded-lg">
                Generate Cover Letter
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
