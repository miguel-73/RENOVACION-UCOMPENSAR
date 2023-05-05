
import React, { useState } from "react";
import { Calendar, CalendarChangeEvent } from 'primereact/calendar';

export default function Fecha() {
    const [date, setDate] = useState<string | Date | Date[] | null>(null);

    return (
        <div className="card flex justify-content-center">
            <Calendar value={date} onChange={(e : CalendarChangeEvent) => setDate(e.value ?? null)} showButtonBar />
        </div>
    )
}
        