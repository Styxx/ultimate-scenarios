var scenarioList = [
    {
        title: "If a player jumps from in-bounds, catches the disc, and touches the disc in the endzone but the rest of their body is out-of-bounds, is it a goal or not a goal? The player has possession through all ground contact.",
        answer: "It's a goal.",
        tags: "receiving bounds endzone obscure",
        panels: [
            {
                type: "Rules",
                rules: [
                    {
                        index: "II.O.3",
                        section: "Definitions",
                        text: "A disc in a player’s possession is considered part of that player."
                    },
                    {
                        index: "XI.A.1",
                        section: "Scoring",
                        text: "To be considered in the end zone after gaining possession of the disc in accordance with <b>II.O.2</b> and <b>XV.E</b>, the player’s first point of ground contact must be completely in the endzone."
                    }
                ]
            },
            {
                type: "Explanation",
                text: "Since a disc in possession is considered to be part of the player, and the first point of contact after gaining possession was completely within the endzone, it is a goal."
            }
        ]
    },
    {
        title: "I (offensive receiver) was trying to catch the disc and my defender fouled me. The disc is on the ground and I call foul. My defender doesn’t contest. Where does the disc go?",
        answer: "You gain possession of the disc at the spot on the playing field proper closest to the infraction.",
        tags: "receiving fouls uncontested devnotes",
        panels: [
            {
                type: "Rules",
                rules: [
                    {
                        index: "XVI.H.3.b.2",
                        section: "Violations and Fouls",
                        text: "If <b>XVI.C.2.b.1</b> of the continuation rule applies: if the call is uncontested, the fouled player gains possession at the spot on the playing field closest to the spot of the infraction. If the foul is contested, the disc reverts to the thrower."
                    }
                ]
            },
            {
                type: "Explanation",
                text: "This scenario follows the format of <b>XVI.C.2.b.1</b>:"
            },
            {
                type: "Rules",
                rules: [
                    {
                        index: "XVI.C.2.b.1",
                        section: "Violations and Fouls",
                        text: "For calls made by a non-thrower: If the team that committed the infraction has possession: If the infraction affected the play (<b>XVI.C.3</b>), play stops and the disc reverts to the thrower unless the specific rule says otherwise."
                    }
                ]
            },
            {
                type: "Explanation",
                text: "So you, as the fouled player, get the disc at the closest spot on the playing field proper to the spot of the infraction. And for the sake of definition:"
            },
            {
                type: "Rules",
                rules: [
                    {
                        index: "III.B",
                        section: "Playing Field",
                        text: "The playing field proper is the playing field excluding the end zones."
                    }
                ]
            }
        ],
        devnotes: "Should I reorder the rules to follow a more linear flow of logic? Currently seems inverted."
    },
    {
        title: "I (offensive receiver) was trying to catch the disc in the endzone and my defender fouls me. I call foul. My defender doesn’t contest. Where does the disc go?",
        answer: "You gain possession of the disc at the endzone line.",
        tags: "receiving fouls uncontested endzone",
        panels: [
            {
                type: "Procedure",
                text: "When the nearest defender acknowledges readiness, tap the ground live. You have 20 seconds to pick up the disc and tap it into play at the nearest point at the front of the endzone from where the disc lies.",
            },
            {
                type: "Rules",
                rules: [
                    {
                        index: "XVI.H.3.b.2",
                        section: "Violations and Fouls",
                        text: "If <b>XVI.C.2.b.1</b> of the continuation rule applies: if the call is uncontested, the fouled player gains possession at the spot on the playing field closest to the spot of the infraction. If the foul is contested, the disc reverts to the thrower."
                    }
                ]
            },
            {
                type: "Explanation",
                text: "This scenario follows <b>XVI.C.2.b.1</b> and, because the foul is uncontested, you gain possession of the disc at the closest spot on the playing field proper from the spot of the infraction; in this case, the endzone line."
            },
            {
                type: "Explanation",
                text: "\"But wait!\" you say, \"What about this rule?!\""
            },
            {
                type: "Rules",
                rules: [
                    {
                        index: "XI.A.2",
                        section: "Scoring",
                        text: "When an in-bounds player in possession of the disc whose first ground contact will be completely within the end zone loses possession of the disc due to an uncontested foul, or lands out of the end zone due to an uncontested force-out foul, that player is awarded a goal."
                    }
                ]
            },
            {
                type: "Explanation",
                text: "While you were fouled, and the foul was uncontested, you never initially gained possession of the disc; therefore, this rule does not apply."
            }
        ]
    },
    {
        title: "I (offensive receiver) catch the disc the endzone and my defender strips the disc from my hand. I call strip. My defender doesn’t contest. Where does the disc go?",
        answer: "It's a goal.",
        tags: "receiving fouls strip uncontested endzone",
        panels: [
            {
                type: "Rules",
                rules: [
                    {
                        index: "XVI.H.3.d",
                        section: "Violations and Fouls",
                        text: "Strip: If a defensive player initiates contact with the disc after an offensive player has gained possession of the disc, and the offensive player loses possession as a result, it is a strip. A strip is a subset of fouls and is treated the same way."
                    },
                    {
                        index: "XI.A.2",
                        section: "Scoring",
                        text: "When an in-bounds player in possession of the disc whose first ground contact will be completely within the end zone loses possession of the disc due to an uncontested foul, or lands out of the end zone due to an uncontested force-out foul, that player is awarded a goal."
                    }
                ],
            },
            {
                type: "Explanation",
                text: "Since a strip is defined as an offensive player <strong><em>losing possession</em></strong> of the disc as a result of contact from the defensive player, and the foul is uncontested, it is a goal."
            }
        ]
    },
    {
        title: "I throw the disc. It sails high, going out, but then curves back in-bounds. Then it hits a tree hanging over the field and the offense catches it in the endzone. Is it a score?",
        answer: "No, it's a turnover. Defense checks the disc in at the nearest spot on the playing field proper under where it hit the tree.",
        tags: "bounds",
        panels: [
            {
                type: "Procedure",
                text: "The new thrower must establish a pivot at the spot and then ground-check the disc before putting it into play.",
            },
            {
                type: "Rules",
                rules: [
                    {
                        index: "IX.B",
                        section: "In- and Out-of-bounds",
                        text: "The out-of-bounds area consists of the ground which is not in-bounds and everything in contact (direct or indirect) with it except for players. Any non-players other than observers are considered part of the out-of-bounds area."
                    },
                    {
                        index: "IX.H.4",
                        section: "In- and Out-of-bounds",
                        text: "To continue play after the disc becomes out-of-bounds, a member of the team gaining possession of the disc must carry it to, and put it into play at, the spot on the playing field proper nearest to where the disc became out-of-bounds due to contact with the out-of-bounds area or a player while any part of the disc was inside the perimeter line."
                    },
                    {
                        index: "IX.I",
                        section: "In- and Out-of-bounds",
                        text: "Events occurring after the disc becomes out-of-bounds do not affect where it is put into play."
                    }
                ]
            },
            {
                type: "Explanation",
                text: "The disc is considered in-bounds until it hits the tree, which is considered as out-of-bounds, <em>even though the part of tree that the disc hit is hanging over the in-bounds area</em>."
            },
            {
                type: "Explanation",
                text: " Because the disc hitting the tree is the most recent event that occurred before the disc was considered out-of-bounds, it is put into play at the nearest spot on the playing field proper where the disc contacted the tree."
            }
        ]
    }
];


