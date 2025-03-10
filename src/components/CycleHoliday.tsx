import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "🎃 Halloween"
    | "🎄 Christmas"
    | "🎆 New Year"
    | "🦃 Thanksgiving"
    | "💖 Valentine's Day";

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("💖 Valentine's Day");

    const nextAlphabetical: Record<Holiday, Holiday> = {
        "🎄 Christmas": "🎃 Halloween",
        "🎃 Halloween": "🎆 New Year",
        "🎆 New Year": "🦃 Thanksgiving",
        "🦃 Thanksgiving": "💖 Valentine's Day",
        "💖 Valentine's Day": "🎄 Christmas",
    };

    const nextByYear: Record<Holiday, Holiday> = {
        "🎆 New Year": "💖 Valentine's Day",
        "💖 Valentine's Day": "🎃 Halloween",
        "🎃 Halloween": "🦃 Thanksgiving",
        "🦃 Thanksgiving": "🎄 Christmas",
        "🎄 Christmas": "🎆 New Year",
    };

    return (
        <div>
            <p>Holiday: {holiday}</p>
            <Button
                onClick={() => {
                    setHoliday(nextAlphabetical[holiday]);
                }}
            >
                Advance by Alphabet
            </Button>
            <Button
                onClick={() => {
                    setHoliday(nextByYear[holiday]);
                }}
            >
                Advance by Year
            </Button>
        </div>
    );
}
