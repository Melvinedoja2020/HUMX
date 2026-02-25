import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";

interface BookingDrawerProps {
  onClose: () => void;
}

export function BookingDrawer({ onClose }: BookingDrawerProps) {
  return (
    <>
      {/* Overlay */}
      <motion.div
        className="fixed inset-0 bg-black/50 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Drawer */}
      <motion.div
        className="fixed right-0 top-0 h-full w-full max-w-lg bg-white z-50 flex flex-col shadow-2xl"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#e0e0e0]">
          <h2 className="text-2xl font-bold text-[#1a1a1a]">Book Your Stay</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[#f5f5f5] rounded-lg transition-colors"
          >
            <FiX className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="bg-[#f5f5f5] h-40 rounded-lg flex items-center justify-center">
            <p className="text-[#666] text-center">Booking Form Component</p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-[#e0e0e0] flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 rounded-lg border border-[#1a1a1a] text-[#1a1a1a] font-semibold hover:bg-[#f5f5f5] transition-colors"
          >
            Close
          </button>
          <button className="flex-1 px-4 py-3 rounded-lg bg-[#d4af37] text-[#1a1a1a] font-semibold hover:bg-[#d4af37]/90 transition-colors">
            Continue
          </button>
        </div>
      </motion.div>
    </>
  );
}
