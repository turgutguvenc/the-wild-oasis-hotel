import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export function useCheckin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: ({ bookingId, breakfast }) =>
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
        ...breakfast,
      }),
    // data is return from the mutatiton function (updateBooking in this case)
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked in`);
      // you can invalidate queries like this it will invalidate all the active queries. (you can use query key too.)
      queryClient.invalidateQueries({ active: true });
      navigate("/");
    },
    onError: () => toast.error("There was an error while check in"),
  });
  return { checkin, isCheckingIn };
}
