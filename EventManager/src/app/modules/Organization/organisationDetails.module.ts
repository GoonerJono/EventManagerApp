import { Time } from '@angular/common';

export class OrganisationDetails {
     organizationId: number;
     openTime?: Time;
     closeTime?: Time;
     organizationStartDay: string;
     organizationEndDay: string;
     name: string;
     email: string;
     registeredDate: Date;
     address: string;
     phoneNumber: string;
     typeOfServiceId:Number ;
     isVerified: boolean;
     city: string;
     suburb: string;
     province: string;
     longitude: string;
     latitude: string;
}
