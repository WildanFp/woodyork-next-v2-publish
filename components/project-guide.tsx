"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Clipboard, Check } from "lucide-react";

export function ProjectGuide() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const commercialTemplate = `// Add this to lib/projects.ts
{
  id: "your-project-id",
  title: "Your Project Title",
  subtitle: "A brief description of your project",
  image: "/path/to/main-image.jpg",
  category: "commercial",
  subcategory: "coffee-shop", // Choose from: coffee-shop, boarding, office, store
  location: "Project Location",
  area: "120 m²",
  duration: "8 Weeks",
  completed: "March 2024",
  client: "Client Name",
  description: [
    "First paragraph of project description.",
    "Second paragraph of project description.",
    "Third paragraph of project description.",
  ],
  designImage: "/path/to/design-image.jpg",
  realityImage: "/path/to/reality-image.jpg",
  gallery: [
    "/path/to/gallery-image-1.jpg",
    "/path/to/gallery-image-2.jpg",
    "/path/to/gallery-image-3.jpg",
  ],
  features: [
    "Feature 1",
    "Feature 2",
    "Feature 3",
  ],
  materials: [
    "Material 1",
    "Material 2",
    "Material 3",
  ],
  relatedProjects: [
    {
      id: "related-project-1",
      title: "Related Project 1",
      image: "/path/to/related-image-1.jpg",
      category: "commercial",
      subcategory: "store",
    },
    // Add more related projects as needed
  ],
}`;

  const residentialTemplate = `// Add this to lib/projects.ts
{
  id: "your-project-id",
  title: "Your Project Title",
  subtitle: "A brief description of your project",
  image: "/path/to/main-image.jpg",
  category: "residential",
  subcategory: "bedroom", // Choose from: bathroom, bedroom, family-room, facade, kids-bedroom, kitchen-set, living-room, arabic-majlis, musholla, rooftop
  location: "Project Location",
  area: "32 m²",
  duration: "4 Weeks",
  completed: "December 2023",
  client: "Client Name",
  description: [
    "First paragraph of project description.",
    "Second paragraph of project description.",
    "Third paragraph of project description.",
  ],
  designImage: "/path/to/design-image.jpg",
  realityImage: "/path/to/reality-image.jpg",
  gallery: [
    "/path/to/gallery-image-1.jpg",
    "/path/to/gallery-image-2.jpg",
    "/path/to/gallery-image-3.jpg",
  ],
  features: [
    "Feature 1",
    "Feature 2",
    "Feature 3",
  ],
  materials: [
    "Material 1",
    "Material 2",
    "Material 3",
  ],
  relatedProjects: [
    {
      id: "related-project-1",
      title: "Related Project 1",
      image: "/path/to/related-image-1.jpg",
      category: "residential",
      subcategory: "bathroom",
    },
    // Add more related projects as needed
  ],
}`;

  return (
    <div className="bg-zinc-900 p-6 rounded-md">
      <h3 className="text-xl font-medium mb-4">How to Add a New Project</h3>
      <p className="text-gray-300 mb-6">
        Follow these steps to add a new project to the website. The project will
        automatically appear in the correct category and subcategory filters.
      </p>

      <Tabs defaultValue="commercial">
        <TabsList className="mb-4">
          <TabsTrigger value="commercial">Commercial Project</TabsTrigger>
          <TabsTrigger value="residential">Residential Project</TabsTrigger>
        </TabsList>

        <TabsContent value="commercial">
          <div className="mb-4">
            <h4 className="text-lg font-medium mb-2">
              Commercial Project Template
            </h4>
            <p className="text-gray-300 mb-4">
              Copy this template and add it to the projects array in{" "}
              <code>lib/projects.ts</code>
            </p>
            <div className="relative">
              <pre className="bg-zinc-950 p-4 rounded-md overflow-x-auto text-sm">
                <code>{commercialTemplate}</code>
              </pre>
              <Button
                variant="outline"
                size="sm"
                className="absolute top-2 right-2"
                onClick={() =>
                  copyToClipboard(commercialTemplate, "commercial")
                }
              >
                {copied === "commercial" ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Clipboard className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-lg font-medium mb-2">
              Commercial Subcategories
            </h4>
            <ul className="list-disc pl-5 text-gray-300 space-y-1">
              <li>coffee-shop</li>
              <li>boarding</li>
              <li>office</li>
              <li>store</li>
            </ul>
          </div>
        </TabsContent>

        <TabsContent value="residential">
          <div className="mb-4">
            <h4 className="text-lg font-medium mb-2">
              Residential Project Template
            </h4>
            <p className="text-gray-300 mb-4">
              Copy this template and add it to the projects array in{" "}
              <code>lib/projects.ts</code>
            </p>
            <div className="relative">
              <pre className="bg-zinc-950 p-4 rounded-md overflow-x-auto text-sm">
                <code>{residentialTemplate}</code>
              </pre>
              <Button
                variant="outline"
                size="sm"
                className="absolute top-2 right-2"
                onClick={() =>
                  copyToClipboard(residentialTemplate, "residential")
                }
              >
                {copied === "residential" ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Clipboard className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-lg font-medium mb-2">
              Residential Subcategories
            </h4>
            <ul className="list-disc pl-5 text-gray-300 space-y-1 grid grid-cols-2">
              <li>bathroom</li>
              <li>bedroom</li>
              <li>family-room</li>
              <li>facade</li>
              <li>kids-bedroom</li>
              <li>kitchen-set</li>
              <li>living-room</li>
              <li>arabic-majlis</li>
              <li>musholla</li>
              <li>rooftop</li>
            </ul>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-8">
        <h4 className="text-lg font-medium mb-2">Project Structure</h4>
        <p className="text-gray-300 mb-4">
          Projects are automatically routed based on their category and
          subcategory. The URL structure is:
        </p>
        <pre className="bg-zinc-950 p-4 rounded-md overflow-x-auto text-sm">
          <code>/projects/[category]/[subcategory]/[id]</code>
        </pre>
        <p className="text-gray-300 mt-4">
          For example, a coffee shop project with ID "artisan-coffee-shop" would
          be accessible at:
        </p>
        <pre className="bg-zinc-950 p-4 rounded-md overflow-x-auto text-sm">
          <code>/projects/commercial/coffee-shop/artisan-coffee-shop</code>
        </pre>
      </div>
    </div>
  );
}
