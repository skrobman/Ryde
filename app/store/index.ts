import { create } from "zustand";
<<<<<<< HEAD
=======
import { LocationStore } from "@/types/type";

export const useLocationStore = create<LocationStore>((set) => ({
  userAddress: null,
  userLongitude: null,
  userLatitude: null,
  destinationLongitude: null,
  destinationLatitude: null,
  destinationAddress: null,
  setUserLocation: ({
    latitude,
    longitude,
    address,
  }: {
    latitude: number;
    longitude: number;
    address: string;
  }) => {
    set(() => ({
      userLongitude: longitude,
      userLatitude: latitude,
      userAddress: address,
    }));
  },
  setDestinationLocation: ({
    latitude,
    longitude,
    address,
  }: {
    latitude: number;
    longitude: number;
    address: string;
  }) => {
    set(() => ({
      destinationLongitude: longitude,
      destinationLatitude: latitude,
      destinationAddress: address,
    }));
  },
}));
>>>>>>> 4a8b0e439c142e702acfffd86ecdaff7da51af4b
