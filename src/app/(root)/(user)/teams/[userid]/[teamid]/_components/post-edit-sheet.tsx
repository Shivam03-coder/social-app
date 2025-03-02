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
    <Sheet >
      <SheetTrigger asChild>
        <button className="rounded bg-gray-700 p-1 text-white hover:bg-gray-600">
          <Edit size={18} />
        </button>
      </SheetTrigger>
      <SheetContent
        side={"right"}
        className="my-auto mr-5 h-[97%] w-[400px] rounded-3xl bg-white p-4"
      >
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
