import { useEffect } from "react";

export default function CB({ callbreakURL, home }) {
    useEffect(() => {
        home();
        window.open(callbreakURL, "_blank");
    });
    return null;
}