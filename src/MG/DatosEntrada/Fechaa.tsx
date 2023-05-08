import React, { useState } from "react";
import { Calendar, CalendarChangeEvent } from 'primereact/calendar';

export default function Fechaa() {
    const [date, setDate] = useState<string | Date | Date[] | null>(null);

    return (
        <>
            <Calendar
                value={date}
                onChange={(e : CalendarChangeEvent) => setDate(e.value ?? null)}
                showButtonBar
                style={{ width: '190px', height: '38px' }}
            />
        </>
    )
}
      