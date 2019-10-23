import { User } from '../User/user.module';
import { Consultant } from '../Consultant/consultant.module';
import { Organisation } from '../Organization/organisation.module';

export class Appointment {
    id?: number;
    ticketNumber?: string;
    date?: Date;
    reason?: string;
    typeOfServiceId?: number;
    organizationId?: number;
    userId?: number;
    consultantId?: number;

    user?: User;
    consultant?: Consultant;
    organization?: Organisation;
}
