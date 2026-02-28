import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function BookingPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const room = searchParams.get("room");
    if (room) {
      navigate(`/rooms/${room}`, { replace: true });
      return;
    }
    navigate("/rooms", { replace: true });
  }, [navigate, searchParams]);

  return null;
}
