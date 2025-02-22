import { Button } from "@/components/ui/button";
import React from "react";

const Cta = () => {
  return (
    <section className="text-pretty bg-gray-900 lg:rounded-t-full py-20 text-white">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-6 text-4xl font-bold">
          Ready to Transform Your Social Media Strategy?
        </h2>
        <p className="mb-8 text-xl opacity-90">
          Join thousands of teams already using our platform to streamline their
          social media management.
        </p>
        <Button className="rounded-full p-4 text-black bg-blue-300">Start Your Free Trial</Button>
      </div>
    </section>
  );
};

export default Cta;
