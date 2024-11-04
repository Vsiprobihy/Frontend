// This file is auto-generated by @hey-api/openapi-ts

export type Login = {
  email: string;
  password: string;
};

export type UserProfile = {
  readonly id?: number;
  first_name?: string | null;
  last_name?: string | null;
  first_name_eng?: string | null;
  last_name_eng?: string | null;
  gender?: string | null;
  date_of_birth?: Date | string | null;
  t_shirt_size?: string | null;
  country?: string | null;
  city?: string | null;
  phone_number?: string | null;
  sports_club?: string | null;
  emergency_contact_name?: string | null;
  emergency_contact_phone?: string | null;
  readonly registered_events?: string;
  readonly avatar?: string | null;
  email?: string;
};

export type AdditionalProfile = {
  readonly id?: number;
  email: string;
  first_name?: string | null;
  last_name?: string | null;
};

export type AdditionalProfileDetail = {
  readonly id?: number;
  email: string;
  first_name?: string | null;
  last_name?: string | null;
};

export type UserAvatarUpload = {
  readonly avatar?: string | null;
};

export type Register = {
  email: string;
  password: string;
  password2: string;
};

export type TokenRefresh = {
  refresh: string;
  readonly access?: string;
};

export type OrganizerEvent = {
  readonly id?: number;
  readonly users?: string;
  name: string;
  site_url?: string | null;
  phone_number?: string | null;
  email: string;
  instagram_url?: string | null;
  facebook_url?: string | null;
  telegram_url?: string | null;
};

export type AdditionalItemEvent = {
  readonly id?: number;
  item_type: "transfer" | "medal" | "t_shirt";
  price?: string | null;
  event?: number;
};

export type DistanceEvent = {
  readonly id?: number;
  name: string;
  competition_type?:
    | "running"
    | "trail"
    | "ultramarathon"
    | "cycling"
    | "online"
    | "walking"
    | "ocr"
    | "swimming"
    | "triathlon";
  category?:
    | "adults"
    | "children"
    | "men"
    | "women"
    | "disabled"
    | "veterans"
    | "pupils"
    | "boys"
    | "juniors"
    | "students"
    | "teachers";
  allow_registration?: boolean;
  length?: string | null;
  start_number_from?: number | null;
  start_number_to?: number | null;
  age_from?: number | null;
  age_to?: number | null;
  cost?: string | null;
  is_free?: boolean;
  promo_only_registration?: boolean;
  show_name_on_number?: boolean;
  show_start_number?: boolean;
  event?: number;
};

export type Event = {
  name: string;
  competition_type:
    | "running"
    | "trail"
    | "ultramarathon"
    | "cycling"
    | "online"
    | "walking"
    | "ocr"
    | "swimming"
    | "triathlon";
  date_from: Date;
  date_to: Date;
  place: string;
  readonly photos?: string | null;
  description?: string;
  registration_link?: string | null;
  hide_participants?: boolean;
  readonly schedule_pdf?: string | null;
  organizer?: OrganizerEvent;
  organizer_id: number;
  additional_items?: Array<AdditionalItemEvent>;
  distances: Array<DistanceEvent>;
  extended_description?: string | null;
};

export type OrganizationAccess = {
  user: string;
  role: "owner" | "organizer";
};

export type EventRegistration = {
  event: number;
  distances: Array<number>;
  additional_items: Array<number>;
  readonly registration_date?: Date;
  readonly is_confirmed?: boolean;
};

export type EventRegistrationDetail = {
  event: number;
  distances: Array<string>;
  additional_items: Array<string>;
  readonly registration_date?: Date;
  is_confirmed?: boolean;
};

export type AuthGoogleAccountInfoListResponse = unknown;

export type AuthGoogleAccountInfoListError = unknown;

export type AuthLoginCreateData = {
  body: Login;
};

export type AuthLoginCreateResponse = {
  /**
   * JWT Refresh Token
   */
  refresh_token: {
    value: string;
    expire: number;
  };
  /**
   * JWT Access Token
   */
  access_token: {
    value: string;
    expire: number;
  };
};

export type AuthLoginCreateError = unknown;

export type AuthProfileListResponse = UserProfile;

export type AuthProfileListError = unknown;

export type AuthProfileUpdateData = {
  body: UserProfile;
};

export type AuthProfileUpdateResponse = UserProfile;

export type AuthProfileUpdateError = unknown;

export type AuthProfilePartialUpdateData = {
  body: UserProfile;
};

export type AuthProfilePartialUpdateResponse = UserProfile;

export type AuthProfilePartialUpdateError = unknown;

export type AuthProfileAdditionalProfilesListResponse =
  Array<AdditionalProfile>;

export type AuthProfileAdditionalProfilesListError = unknown;

export type AuthProfileAdditionalProfilesCreateData = {
  body: AdditionalProfile;
};

export type AuthProfileAdditionalProfilesCreateResponse = AdditionalProfile;

export type AuthProfileAdditionalProfilesCreateError = unknown;

export type AuthProfileAdditionalProfilesReadData = {
  path: {
    profile_id: string;
  };
};

export type AuthProfileAdditionalProfilesReadResponse = AdditionalProfileDetail;

export type AuthProfileAdditionalProfilesReadError = unknown;

export type AuthProfileAdditionalProfilesUpdateData = {
  body: AdditionalProfileDetail;
  path: {
    profile_id: string;
  };
};

export type AuthProfileAdditionalProfilesUpdateResponse =
  AdditionalProfileDetail;

export type AuthProfileAdditionalProfilesUpdateError = unknown;

export type AuthProfileAdditionalProfilesDeleteData = {
  path: {
    profile_id: string;
  };
};

export type AuthProfileAdditionalProfilesDeleteResponse = void;

export type AuthProfileAdditionalProfilesDeleteError = unknown;

export type AuthProfileUploadAvatarUpdateData = {
  body: UserAvatarUpload;
};

export type AuthProfileUploadAvatarUpdateResponse = unknown;

export type AuthProfileUploadAvatarUpdateError = unknown;

export type AuthProfileUploadAvatarPartialUpdateData = {
  body: UserAvatarUpload;
};

export type AuthProfileUploadAvatarPartialUpdateResponse = unknown;

export type AuthProfileUploadAvatarPartialUpdateError = unknown;

export type AuthRegisterCreateData = {
  body: Register;
};

export type AuthRegisterCreateResponse = Register;

export type AuthRegisterCreateError = unknown;

export type AuthTokenRefreshCreateData = {
  body: TokenRefresh;
};

export type AuthTokenRefreshCreateResponse = TokenRefresh;

export type AuthTokenRefreshCreateError = unknown;

export type CalendarFilterListData = {
  query?: {
    /**
     * Type of competition (running, trail, cycling)
     */
    competition_type?: string;
    /**
     * Maximum distance (km)
     */
    distance_max?: number;
    /**
     * Minimum distance (km)
     */
    distance_min?: number;
    /**
     * Event month (1-12)
     */
    month?: number;
    /**
     * Event name
     */
    name?: string;
    /**
     * Type number of page(Pagination)
     */
    page?: string;
    /**
     * Event location
     */
    place?: string;
    /**
     * Event year
     */
    year?: number;
  };
};

export type CalendarFilterListResponse = Array<Event>;

export type CalendarFilterListError = unknown;

export type EventEventsReadData = {
  path: {
    id: string;
  };
};

export type EventEventsReadResponse = Event;

export type EventEventsReadError = unknown;

export type OrganizerAdditionalItemsReadData = {
  path: {
    event_id: string;
  };
};

export type OrganizerAdditionalItemsReadResponse = AdditionalItemEvent;

export type OrganizerAdditionalItemsReadError = unknown;

export type OrganizerAdditionalItemsCreateData = {
  body: {
    item_type?: string;
    price?: number;
  };
  path: {
    event_id: string;
    /**
     * Event ID
     */
    // event_id: number;
  };
};

export type OrganizerAdditionalItemsCreateResponse = AdditionalItemEvent;

export type OrganizerAdditionalItemsCreateError = unknown;

export type OrganizerAdditionalItemsUpdateData = {
  path: {
    event_id: string;
  };
};

export type OrganizerAdditionalItemsUpdateResponse = Array<AdditionalItemEvent>;

export type OrganizerAdditionalItemsUpdateError = unknown;

export type OrganizerAdditionalItemsPartialUpdateData = {
  body: {
    /**
     * ID of the additional item (required for update)
     */
    id: number;
    /**
     * Type of the item, choices: "transfer", "medal", "t_shirt"
     */
    item_type?: string;
    /**
     * Price of the item
     */
    price?: number;
    /**
     * Is the item free or not
     */
    is_free?: boolean;
  };
  path: {
    event_id: string;
  };
};

export type OrganizerAdditionalItemsPartialUpdateResponse = AdditionalItemEvent;

export type OrganizerAdditionalItemsPartialUpdateError = unknown;

export type OrganizerAdditionalItemsDeleteData = {
  path: {
    event_id: string;
  };
};

export type OrganizerAdditionalItemsDeleteResponse = void;

export type OrganizerAdditionalItemsDeleteError = unknown;

export type OrganizerDistancesReadData = {
  path: {
    event_id: string;
  };
};

export type OrganizerDistancesReadResponse = Array<{
  /**
   * ID of the distance.
   */
  id?: number;
  /**
   * Name of the distance.
   */
  name?: string;
  /**
   * Type of competition.
   */
  competition_type?: string;
  /**
   * Category of participants.
   */
  category?: string;
  /**
   * Distance length.
   */
  length?: number;
  /**
   * Start number.
   */
  start_number_from?: number;
  /**
   * End number.
   */
  start_number_to?: number;
  /**
   * Minimum age.
   */
  age_from?: number;
  /**
   * Maximum age.
   */
  age_to?: number;
  /**
   * Participation cost.
   */
  cost?: number;
  /**
   * Is event free.
   */
  is_free?: boolean;
  /**
   * Promo registration only.
   */
  promo_only_registration?: boolean;
  /**
   * Allow registration.
   */
  allow_registration?: boolean;
  /**
   * Show name on number.
   */
  show_name_on_number?: boolean;
  /**
   * Show start number.
   */
  show_start_number?: boolean;
  /**
   * ID of the event.
   */
  event?: number;
}>;

export type OrganizerDistancesReadError = unknown;

export type OrganizerDistancesCreateData = {
  body: {
    /**
     * Name of the distance.
     */
    name: string;
    /**
     * Type of competition (e.g., running, cycling, etc.).
     */
    competition_type?:
      | "running"
      | "trail"
      | "ultramarathon"
      | "cycling"
      | "online"
      | "walking"
      | "ocr"
      | "swimming"
      | "triathlon";
    /**
     * Category of participants (e.g., adults, children, etc.).
     */
    category?:
      | "adults"
      | "children"
      | "men"
      | "women"
      | "disabled"
      | "veterans"
      | "pupils"
      | "boys"
      | "juniors"
      | "students"
      | "teachers";
    /**
     * Distance length (in km or meters).
     */
    length?: number;
    /**
     * Starting number range.
     */
    start_number_from?: number;
    /**
     * Ending number range.
     */
    start_number_to?: number;
    /**
     * Whether to show the start number.
     */
    show_start_number?: boolean;
    /**
     * Whether to show the name on the number.
     */
    show_name_on_number?: boolean;
    /**
     * Minimum age of participants.
     */
    age_from?: number;
    /**
     * Maximum age of participants.
     */
    age_to?: number;
    /**
     * Cost of participation.
     */
    cost?: number;
    /**
     * Indicates if the event is free.
     */
    is_free: boolean;
    /**
     * Restrict registration to promo users only.
     */
    promo_only_registration?: boolean;
    /**
     * Allow participants to register.
     */
    allow_registration?: boolean;
  };
  path: {
    event_id: string;
  };
};

export type OrganizerDistancesCreateResponse = DistanceEvent;

export type OrganizerDistancesCreateError = unknown;

export type OrganizerDistancesUpdateData = {
  path: {
    event_id: string;
  };
};

export type OrganizerDistancesUpdateResponse = Array<{
  /**
   * ID of the created distance.
   */
  id?: number;
  /**
   * Name of the distance.
   */
  name?: string;
  /**
   * Type of competition.
   */
  competition_type?: string;
  /**
   * Category of participants.
   */
  category?: string;
  /**
   * Distance length.
   */
  length?: number;
  /**
   * Start number.
   */
  start_number_from?: number;
  /**
   * End number.
   */
  start_number_to?: number;
  /**
   * Minimum age.
   */
  age_from?: number;
  /**
   * Maximum age.
   */
  age_to?: number;
  /**
   * Participation cost.
   */
  cost?: number;
  /**
   * Is event free.
   */
  is_free?: boolean;
  /**
   * Promo registration only.
   */
  promo_only_registration?: boolean;
  /**
   * Allow registration.
   */
  allow_registration?: boolean;
  /**
   * Show name on number.
   */
  show_name_on_number?: boolean;
  /**
   * Show start number.
   */
  show_start_number?: boolean;
  /**
   * ID of the event.
   */
  event?: number;
}>;

export type OrganizerDistancesUpdateError = unknown;

export type OrganizerDistancesPartialUpdateData = {
  path: {
    event_id: string;
  };
};

export type OrganizerDistancesPartialUpdateResponse = Array<{
  /**
   * ID of the created distance.
   */
  id?: number;
  /**
   * Name of the distance.
   */
  name?: string;
  /**
   * Type of competition.
   */
  competition_type?: string;
  /**
   * Category of participants.
   */
  category?: string;
  /**
   * Distance length.
   */
  length?: number;
  /**
   * Start number.
   */
  start_number_from?: number;
  /**
   * End number.
   */
  start_number_to?: number;
  /**
   * Minimum age.
   */
  age_from?: number;
  /**
   * Maximum age.
   */
  age_to?: number;
  /**
   * Participation cost.
   */
  cost?: number;
  /**
   * Is event free.
   */
  is_free?: boolean;
  /**
   * Promo registration only.
   */
  promo_only_registration?: boolean;
  /**
   * Allow registration.
   */
  allow_registration?: boolean;
  /**
   * Show name on number.
   */
  show_name_on_number?: boolean;
  /**
   * Show start number.
   */
  show_start_number?: boolean;
  /**
   * ID of the event.
   */
  event?: number;
}>;

export type OrganizerDistancesPartialUpdateError = unknown;

export type OrganizerDistancesDeleteData = {
  path: {
    event_id: string;
  };
};

export type OrganizerDistancesDeleteResponse = void;

export type OrganizerDistancesDeleteError = unknown;

export type OrganizerEventsCreateData = {
  body: {
    /**
     * Name of the event
     */
    name: string;
    /**
     * Type of competition
     */
    competition_type: string;
    /**
     * Event start date
     */
    date_from: Date;
    /**
     * Event end date
     */
    date_to: Date;
    /**
     * Location of the event
     */
    place: string;
    /**
     * Event description
     */
    description: string;
    /**
     * Registration link
     */
    registration_link: string;
    /**
     * Whether to hide participants
     */
    hide_participants: boolean;
    /**
     * ID of the organizer
     */
    organizer_id: number;
    /**
     * List of additional items
     */
    additional_items: Array<{
      /**
       * Type of additional item
       */
      item_type?: string;
      /**
       * Price of additional item
       */
      price?: string;
    }>;
    /**
     * List of distances
     */
    distances: Array<{
      /**
       * Name of the distance
       */
      name?: string;
      /**
       * Type of competition
       */
      competition_type?: string;
      /**
       * Category of participants
       */
      category?: string;
      /**
       * Length of the distance in km
       */
      length?: number;
      /**
       * Starting number
       */
      start_number_from?: number;
      /**
       * Ending number
       */
      start_number_to?: number;
      /**
       * Show start number
       */
      show_start_number?: boolean;
      /**
       * Show name on the number
       */
      show_name_on_number?: boolean;
      /**
       * Minimum age
       */
      age_from?: number;
      /**
       * Maximum age
       */
      age_to?: number;
      /**
       * Cost of the distance
       */
      cost?: number;
      /**
       * Is the distance free
       */
      is_free?: boolean;
      /**
       * Promo-only registration
       */
      promo_only_registration?: boolean;
      /**
       * Allow registration
       */
      allow_registration?: boolean;
    }>;
    /**
     * Extended description of the event
     */
    extended_description?: string;
  };
};

export type OrganizerEventsCreateResponse = Event;

export type OrganizerEventsCreateError = unknown;

export type OrganizerEventsReadData = {
  path: {
    id: string;
  };
};

export type OrganizerEventsReadResponse = Event;

export type OrganizerEventsReadError = unknown;

export type OrganizerEventsUpdateData = {
  body: {
    /**
     * Name of the event
     */
    name: string;
    /**
     * Type of competition
     */
    competition_type: string;
    /**
     * Event start date
     */
    date_from: Date;
    /**
     * Event end date
     */
    date_to: Date;
    /**
     * Location of the event
     */
    place: string;
    /**
     * Event description
     */
    description: string;
    /**
     * Registration link
     */
    registration_link: string;
    /**
     * Whether to hide participants
     */
    hide_participants: boolean;
    /**
     * Extended description of the event
     */
    extended_description?: string;
  };
  path: {
    id: string;
  };
};

export type OrganizerEventsUpdateResponse = Event;

export type OrganizerEventsUpdateError = unknown;

export type OrganizerEventsPartialUpdateData = {
  body: {
    /**
     * Name of the event
     */
    name?: string;
    /**
     * Type of competition
     */
    competition_type?: string;
    /**
     * Event start date
     */
    date_from?: Date;
    /**
     * Event end date
     */
    date_to?: Date;
    /**
     * Location of the event
     */
    place?: string;
    /**
     * Event description
     */
    description?: string;
    /**
     * Registration link
     */
    registration_link?: string;
    /**
     * Whether to hide participants
     */
    hide_participants?: boolean;
    /**
     * Extended description of the event
     */
    extended_description?: string;
  };
  path: {
    id: string;
  };
};

export type OrganizerEventsPartialUpdateResponse = Event;

export type OrganizerEventsPartialUpdateError = unknown;

export type OrganizerEventsDeleteData = {
  path: {
    id: string;
  };
};

export type OrganizerEventsDeleteResponse = void;

export type OrganizerEventsDeleteError = unknown;

export type OrganizerInviteModeratorCreateData = {
  body: OrganizationAccess;
};

export type OrganizerInviteModeratorCreateResponse = OrganizationAccess;

export type OrganizerInviteModeratorCreateError = unknown;

export type OrganizerOrganizerEventsListResponse = Array<OrganizerEvent>;

export type OrganizerOrganizerEventsListError = unknown;

export type OrganizerOrganizerEventsCreateData = {
  body: OrganizerEvent;
};

export type OrganizerOrganizerEventsCreateResponse = OrganizerEvent;

export type OrganizerOrganizerEventsCreateError = unknown;

export type OrganizerOrganizerEventsReadData = {
  path: {
    id: string;
  };
};

export type OrganizerOrganizerEventsReadResponse = OrganizerEvent;

export type OrganizerOrganizerEventsReadError = unknown;

export type OrganizerOrganizerEventsUpdateData = {
  body: OrganizerEvent;
  path: {
    id: string;
  };
};

export type OrganizerOrganizerEventsUpdateResponse = OrganizerEvent;

export type OrganizerOrganizerEventsUpdateError = unknown;

export type OrganizerOrganizerEventsPartialUpdateData = {
  body: OrganizerEvent;
  path: {
    id: string;
  };
};

export type OrganizerOrganizerEventsPartialUpdateResponse = OrganizerEvent;

export type OrganizerOrganizerEventsPartialUpdateError = unknown;

export type OrganizerOrganizerEventsDeleteData = {
  path: {
    id: string;
  };
};

export type OrganizerOrganizerEventsDeleteResponse = void;

export type OrganizerOrganizerEventsDeleteError = unknown;

export type RegisterUserForEventData = {
  body: {
    /**
     * ID of the event to register for.
     */
    event: number;
    /**
     * List of distance IDs selected by the user. At least one distance is required.
     */
    distances: Array<number>;
    /**
     * List of additional item IDs selected by the user, such as t-shirts or medals. This field is optional.
     */
    additional_items?: Array<number>;
  };
};

export type RegisterUserForEventResponse = EventRegistration;

export type RegisterUserForEventError = unknown;

export type GetEventRegistrationData = {
  path: {
    id: string;
  };
};

export type GetEventRegistrationResponse = EventRegistrationDetail;

export type GetEventRegistrationError = unknown;

export type UpdateEventRegistrationData = {
  body: {
    /**
     * ID of the event to update registration for.
     */
    event: number;
    /**
     * List of updated distance IDs selected by the user.
     */
    distances: Array<number>;
    /**
     * List of updated additional item IDs selected by the user.
     */
    additional_items?: Array<number>;
  };
  path: {
    id: string;
  };
};

export type UpdateEventRegistrationResponse = EventRegistrationDetail;

export type UpdateEventRegistrationError = unknown;

export type PartialUpdateEventRegistrationData = {
  body: {
    /**
     * List of updated distance IDs selected by the user.
     */
    distances?: Array<number>;
    /**
     * List of updated additional item IDs selected by the user.
     */
    additional_items?: Array<number>;
  };
  path: {
    id: string;
  };
};

export type PartialUpdateEventRegistrationResponse = EventRegistrationDetail;

export type PartialUpdateEventRegistrationError = unknown;

export type DeleteEventRegistrationData = {
  path: {
    id: string;
  };
};

export type DeleteEventRegistrationResponse = void;

export type DeleteEventRegistrationError = unknown;

export type UpcomingEventsListData = {
  query?: {
    /**
     * Number of upcoming events to return (default is 3)
     */
    count?: number;
  };
};

export type UpcomingEventsListResponse = {
  /**
   * List of upcoming events
   */
  events?: Array<{
    /**
     * Event ID
     */
    id?: number;
    /**
     * Event name
     */
    name?: string;
    /**
     * Event start date
     */
    date_from?: Date;
    /**
     * Event end date (optional)
     */
    date_to?: Date;
    /**
     * Event place
     */
    place?: string;
    /**
     * Type of competition
     */
    competition_type?: string;
    /**
     * URL of event photo (optional)
     */
    photos?: string;
    /**
     * List of event distances
     */
    distances?: Array<{
      /**
       * Distance name
       */
      name?: string;
      /**
       * Distance ID
       */
      id?: number;
    }>;
  }>;
};

export type UpcomingEventsListError = unknown;

export type UserUserInfoListResponse = {
  /**
   * User's full name or 'User' if not authenticated
   */
  username?: string;
  /**
   * Full URL of the user's avatar, or null if not authenticated or no avatar set
   */
  avatar?: string;
};

export type UserUserInfoListError = unknown;
