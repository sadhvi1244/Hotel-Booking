import { useState } from "react";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "../../lib/utils";
import { Button } from "../../components/ui/Button";
import { Calendar } from "../../components/ui/Calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/Popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/Select";

const BookingForm = () => {
  const [checkInDate, setCheckInDate] = useState();
  const [checkOutDate, setCheckOutDate] = useState();
  const [guests, setGuests] = useState("2");

  return (
    <div className="relative w-full">
      <div className="relative max-w-7xl mx-auto px-8 py-16 sm:px-6 lg:px-8">
        <div className="bg-white shadow-xl overflow-hidden">
          <div className="flex flex-col md:grid md:grid-cols-3 lg:flex lg:flex-row">
            {/* Check-in Date */}
            <div className="flex-1 p-4 sm:p-6 border-b md:border-b md:border-r lg:border-b-0 lg:border-r border-gray-200">
              <p className="text-base font-medium text-gray-900 mb-1">
                Check-In
              </p>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start text-left font-normal p-0 h-auto hover:bg-transparent",
                      !checkInDate && "text-gray-500"
                    )}
                  >
                    {checkInDate ? (
                      <span className="text-gray-900">
                        {format(checkInDate, "dd MMM yyyy")}
                      </span>
                    ) : (
                      <span>Select date</span>
                    )}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={checkInDate}
                    onSelect={setCheckInDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Check-out Date */}
            <div className="flex-1 p-4 sm:p-6 border-b md:border-b md:border-r lg:border-b-0 lg:border-r border-gray-200">
              <p className="text-base font-medium text-gray-900 mb-1">
                Check-Out
              </p>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start text-left font-normal p-0 h-auto hover:bg-transparent",
                      !checkOutDate && "text-gray-500"
                    )}
                  >
                    {checkOutDate ? (
                      <span className="text-gray-900">
                        {format(checkOutDate, "dd MMM yyyy")}
                      </span>
                    ) : (
                      <span>Select date</span>
                    )}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={checkOutDate}
                    onSelect={setCheckOutDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Guests */}
            <div className="flex-1 p-4 sm:p-6 border-b md:border-b lg:border-b-0 lg:border-r border-gray-200">
              <p className="text-base font-medium text-gray-900 mb-1">Guests</p>
              <Select value={guests} onValueChange={setGuests}>
                <SelectTrigger className="w-full border-0 p-0 h-auto focus:ring-0 shadow-none">
                  <SelectValue placeholder="Select guests" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Guest</SelectItem>
                  <SelectItem value="2">2 Guests</SelectItem>
                  <SelectItem value="3">3 Guests</SelectItem>
                  <SelectItem value="4">4 Guests</SelectItem>
                  <SelectItem value="5">5 Guests</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Check Availability Button */}
            <div className="flex-1 p-4 sm:p-6 bg-black flex items-center md:col-span-3 lg:col-span-1">
              <Button className="w-full h-12 bg-black hover:bg-black/90 text-white text-base font-medium tracking-wide">
                CHECK AVAILABILITY
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
