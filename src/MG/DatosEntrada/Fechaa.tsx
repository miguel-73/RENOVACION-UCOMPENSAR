import React, { useState } from "react";
import { Calendar, CalendarChangeEvent } from 'primereact/calendar';
import { Box, InputLabel } from "@mui/material";
export default function Fechaa() {
    const [date, setDate] = useState<string | Date | Date[] | null>(null);

    return (
        <>
            {/* <Box sx={{ position: "absolute", }}> */}
            <Calendar
                disabled placeholder="Fecha Actual"
                value={date}
                onChange={(e: CalendarChangeEvent) => setDate(e.value ?? null)}
                showButtonBar
            // style={{  top: '26px', }}
            >
            </Calendar>
            {/* </Box> */}
        </>
    )
}
