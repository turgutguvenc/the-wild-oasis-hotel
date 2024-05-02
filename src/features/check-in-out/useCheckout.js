import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { toast } from "react-hot-toast";

export function useCheckout() {
  const queryClient = useQueryClient();

  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),
    // data is return from the mutatiton function (updateBooking in this case)
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked out`);
      // you can invalidate queries like this it will invalidate all the active queries. (you can use query key too.)
      queryClient.invalidateQueries({ active: true });
    },
    onError: () => toast.error("There was an error while check out"),
  });
  return { checkout, isCheckingOut };
}
