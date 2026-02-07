// Types for Post Listing Form

export interface PostListingFormData {
  title: string;
  rent: string;
  area: string;
  type: string;
  address: string;
  beds: number;
  baths: number;
  description: string;
  amenities: string[];
  leaseTerm: string;
  deposit: string;
  rules: string[];
}

// Type for form change events
export type FormChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
