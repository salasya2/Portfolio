import { useState } from "react";
import { SearchModal } from "../SearchModal";
import { Button } from "@/components/ui/button";

export default function SearchModalExample() {
  const [open, setOpen] = useState(true);

  return (
    <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open Search</Button>
      <SearchModal open={open} onOpenChange={setOpen} />
    </div>
  );
}
