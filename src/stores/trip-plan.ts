import type { SearchTrip } from "@/types/trip.type";
import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useTripPlanStore = defineStore("trip-plan", () => {
    const pickedTrips = ref<SearchTrip[][]>([[], [], []]);
    const tourIds = ref<number[]>([]);
    const coordinates = computed(() => {
        return pickedTrips.value.map((trips) => {
            return trips.map((trip) => {
                return {
                    latitude: trip.latitude,
                    longitude: trip.longitude,
                };
            });
        }).reduce((array, trips) => [...array, ...trips], []);
    })
    const centercoordinate = computed(() => {
        if (coordinates.value.length === 0) return;
        const bounds = new kakao.maps.LatLngBounds();
        coordinates.value.forEach((coordinate) => {
            bounds.extend(new kakao.maps.LatLng(coordinate.latitude, coordinate.longitude));
        });
        return bounds;
    });


    const day = ref<number>(3);

    const setDay = (num: number) => {
        day.value = num;
        pickedTrips.value = Array.from({ length: day.value }, () => []);
    }

    const exists = (tripId: number): boolean => {
        return tourIds.value.includes(tripId);
    }

    const addTrip = (day: number, trip: SearchTrip) => {
        const prev = pickedTrips.value[day - 1]
        pickedTrips.value[day - 1] = [...prev, trip];
        tourIds.value = [...tourIds.value, trip.tourId];
    }

    return {
        pickedTrips,
        coordinates,
        day,
        centercoordinate,
        addTrip,
        exists
    };
});