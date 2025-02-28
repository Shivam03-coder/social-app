"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { toast } from "sonner";
import {
  CalendarIcon,
  CalendarRange,
  CalendarRangeIcon,
  ChevronDown,
  CircleChevronDown,
} from "lucide-react";

const FormSchema = z.object({
  time: z.date({}),
});

function DateTimePicker() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast.success(`Selected date and time: ${format(data.time, "PPPPpppp")}`);
  }

  function handleDateSelect(date: Date | undefined) {
    if (date) {
      form.setValue("time", date);
    }
  }

  function handleTimeChange(type: "hour" | "minute" | "ampm", value: string) {
    const currentDate = form.getValues("time") || new Date();
    let newDate = new Date(currentDate);

    if (type === "hour") {
      const hour = parseInt(value, 10);
      newDate.setHours(newDate.getHours() >= 12 ? hour + 12 : hour);
    } else if (type === "minute") {
      newDate.setMinutes(parseInt(value, 10));
    } else if (type === "ampm") {
      const hours = newDate.getHours();
      if (value === "AM" && hours >= 12) {
        newDate.setHours(hours - 12);
      } else if (value === "PM" && hours < 12) {
        newDate.setHours(hours + 12);
      }
    }

    form.setValue("time", newDate);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="time"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <Popover>
                <PopoverTrigger>
                  <span className="flex items-center gap-x-2 text-sm">
                    <CalendarRangeIcon />
                  </span>
                </PopoverTrigger>
                <PopoverContent className="w-auto bg-white p-0">
                  <div className="sm:flex">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={handleDateSelect}
                      initialFocus
                    />
                    <div className="flex flex-col divide-y sm:h-[300px] sm:flex-row sm:divide-x sm:divide-y-0">
                      <ScrollArea className="w-64 sm:w-auto">
                        <div className="flex p-2 sm:flex-col">
                          {Array.from({ length: 12 }, (_, i) => i + 1)
                            .reverse()
                            .map((hour) => (
                              <Button
                                key={hour}
                                size="icon"
                                variant={
                                  field.value &&
                                  field.value.getHours() % 12 === hour % 12
                                    ? "default"
                                    : "ghost"
                                }
                                className="aspect-square shrink-0 sm:w-full"
                                onClick={() =>
                                  handleTimeChange("hour", hour.toString())
                                }
                              >
                                {hour}
                              </Button>
                            ))}
                        </div>
                        <ScrollBar
                          orientation="horizontal"
                          className="sm:hidden"
                        />
                      </ScrollArea>
                      <ScrollArea className="w-64 sm:w-auto">
                        <ScrollBar
                          orientation="horizontal"
                          className="sm:hidden"
                        />
                      </ScrollArea>
                      <ScrollArea className="">
                        <div className="flex p-2 sm:flex-col">
                          {["AM", "PM"].map((ampm) => (
                            <Button
                              key={ampm}
                              size="icon"
                              variant={
                                field.value &&
                                ((ampm === "AM" &&
                                  field.value.getHours() < 12) ||
                                  (ampm === "PM" &&
                                    field.value.getHours() >= 12))
                                  ? "default"
                                  : "ghost"
                              }
                              className="aspect-square shrink-0 sm:w-full"
                              onClick={() => handleTimeChange("ampm", ampm)}
                            >
                              {ampm}
                            </Button>
                          ))}
                        </div>
                      </ScrollArea>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

export default DateTimePicker;
