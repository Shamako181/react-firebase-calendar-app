import React from 'react'

import { JournalEntry } from './JournalEntry'

export const JournalEntries = () => {

    const entries = [1,2,3,4,5]

    return (
        <div className="journall__entries">
            {
                entries.map(value => (
                    <JournalEntry 
                        key={value}
                    />
                ))
            }
        </div>
    )
}
