import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      {" "}
      <Card className="w-full max-w-md">
        {" "}
        <CardHeader>
          {" "}
          <Badge className="w-fit">New</Badge>{" "}
          <CardTitle>My First shadcn UI</CardTitle>{" "}
          <CardDescription>
            My components are ready to use!{" "}
          </CardDescription>{" "}
        </CardHeader>
        <CardContent>
          <p>Welcome to my React application.</p>
        </CardContent>
        <CardFooter>
          <Button onClick={() => alert("It works!")}>Click Me</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default App;
