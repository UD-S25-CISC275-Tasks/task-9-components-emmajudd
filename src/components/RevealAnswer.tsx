import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [value, setValue] = useState<boolean>(false);

    return (
        <div>
            <Button
                onClick={() => {
                    setValue(!value);
                }}
            >
                Reveal Answer
            </Button>
            {value && <p>42</p>}
        </div>
    );
}
