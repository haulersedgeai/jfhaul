import type { LucideIcon } from "lucide-react";
import {
  Trash2,
  Sofa,
  BedDouble,
  Refrigerator,
  Waves,
  Warehouse,
  Building2,
  Home,
  Car,
  Landmark,
  Boxes,
  DoorOpen,
  Building,
  Briefcase,
  PackageOpen,
} from "lucide-react";

export const serviceIcons: Record<string, LucideIcon> = {
  "junk-removal": Trash2,
  "furniture-removal": Sofa,
  "mattress-removal": BedDouble,
  "appliance-removal": Refrigerator,
  "hot-tub-removal": Waves,
  "shed-removal": Warehouse,
  "property-cleanouts": Building2,
  "house-cleanouts": Home,
  "garage-cleanouts": Car,
  "estate-cleanouts": Landmark,
  "hoarder-cleanouts": Boxes,
  "eviction-cleanouts": DoorOpen,
  "apartment-cleanouts": Building,
  "office-cleanouts": Briefcase,
  "warehouse-cleanouts": PackageOpen,
};

export function iconFor(slug: string): LucideIcon {
  return serviceIcons[slug] ?? Trash2;
}
