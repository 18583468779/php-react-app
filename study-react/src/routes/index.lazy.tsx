import { createLazyFileRoute } from "@tanstack/react-router";
import { Button } from "../assets/components/ui/button";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <Button>Click me</Button>

      <h3>Welcome Home!</h3>
    </div>
  );
}
