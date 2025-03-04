import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Edit } from "lucide-react";

const PostEditSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="rounded bg-gray-700 p-1 text-white hover:bg-gray-600">
          <Edit size={18} />
        </button>
      </SheetTrigger>
      <SheetContent
        side={"bottom"}
        className="my-auto mr-5 h-[70%] w-full bg-white p-4"
      >
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default PostEditSheet;
