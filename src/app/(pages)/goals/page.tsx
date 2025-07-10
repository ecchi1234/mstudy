import { Button } from "@/components/ui/button";

export default function GoalsPage() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Goals</h1>
      <p className="mb-4">
        Set and track your personal and professional goals.
      </p>
      <Button className="mb-4 px-4 py-2 rounded ">Add New Goal</Button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example goal card */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Learn Next.js</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Complete the Next.js tutorial and build a small project.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Track Progress
          </button>
        </div>
      </div>
    </div>
  );
}
