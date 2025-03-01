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
      <SheetTrigger>
        <button className="rounded bg-gray-700 p-1 text-white hover:bg-gray-600">
          <Edit size={18} />
        </button>
      </SheetTrigger>
      <SheetContent side={"bottom"} className="bg-white h-[600px]">
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default PostEditSheet;
