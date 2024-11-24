export const jsonData = {
    "assets": {
        "USD": {
            "summary": "Donald Trump's tweets express overwhelmingly negative sentiment towards the current administration's economic policies, predicting significantly worse economic conditions under a Biden-Harris administration.  He emphasizes themes of economic decline, border insecurity, and rising costs.  Jim Cramer's tweets show a mixed sentiment, with concerns about short selling and market manipulation alongside positive comments on specific companies like Nvidia and Disney.  Overall, there is a strong bearish undercurrent regarding the broader economy, but individual stocks are assessed on a case-by-case basis with mixed conclusions.",
            "sentiment": "bearish",
            "strength": 4,
            "recentSentimentShiftsTimeline": {
                "Trump": {
                    "Aug 12, 2024": "Negative assessment of the current economy",
                    "Aug 22, 2024": "Prediction of significantly worse economic conditions under Biden-Harris",
                    "Nov 6, 2024": "Election-day tweets focused on economic issues"
                },
                "Cramer": {
                    "Nov 22, 2024": "Concerns about short selling and market manipulation",
                    "Nov 20-21, 2024": "Mixed sentiment on several stocks",
                    "Oct 31 - Nov 7, 2024": "Concerns about market conditions and election implications"
                }
            }
        },
        "NVDA": {
            "summary": "Jim Cramer expresses strong bullish sentiment towards Nvidia, repeatedly highlighting its strong performance and dismissing negative narratives. He anticipates continued strength.  Donald Trump's tweets do not directly mention Nvidia.",
            "sentiment": "bullish",
            "strength": 5,
            "recentSentimentShiftsTimeline": {
                "Cramer": {
                    "Nov 21, 2024": "Defends NVDA against short-sellers",
                    "Oct 31, 2024": "Highlights strong demand and dismisses negative narratives",
                    "Oct 2, 2024": "Advises against selling NVDA due to short-selling",
                    "Sep 19, 2024": "Criticizes daily traders of NVDA",
                    "Aug 26 - 28, 2024": "Mixed sentiment leading up to earnings report"
                }
            }
        },
        "AAPL": {
            "summary": "Jim Cramer's sentiment on Apple is mixed.  While he acknowledges positive aspects (e.g., strong spellcheck integration, positive China sales), he also expresses concern about sales slowdowns and the impact of short-selling.  Donald Trump's tweets do not directly mention Apple.",
            "sentiment": "neutral",
            "strength": 2,
            "recentSentimentShiftsTimeline": {
                "Cramer": {
                    "Nov 21, 2024": "Notes positive aspects of Apple's spellcheck",
                    "Oct 31, 2024": "Highlights strong European sales, downplays China sales concerns",
                    "Oct 18, 2024": "Questions why Apple isn't up more given negative short-seller narratives",
                    "Oct 31, 2024": "Considers the negative forecast cut for Apple reasonable",
                    "May 3, 2024": "Expresses concerns about reports of tepid sales in China"
                }
            }
        },
        "DIS": {
            "summary": "Jim Cramer expresses consistently positive sentiment towards Disney, highlighting positive aspects of its business and upcoming show features.  Donald Trump's tweets do not directly mention Disney.",
            "sentiment": "bullish",
            "strength": 4,
            "recentSentimentShiftsTimeline": {
                "Cramer": {
                    "Nov 21, 2024": "Excited about a Disney piece",
                    "Nov 20, 2024": "Highlights Disney among strong consumer brands",
                    "Nov 20, 2024": "Comments positively on Disney Cruise Line launch"
                }
            }
        },
        "GME": {
            "summary": "Jim Cramer's tweets on Gamestop show a mostly negative outlook, focusing on its high valuation relative to its fundamentals and expressing skepticism. He does mention the potential for the stock to move higher based on meme-driven speculation. Donald Trump's tweets do not directly mention Gamestop.",
            "sentiment": "bearish",
            "strength": 3,
            "recentSentimentShiftsTimeline": {
                "Cramer": {
                    "May 17, 2024": "Questions the bullish case for Gamestop",
                    "May 14, 2024": "Notes the high valuation of GME relative to comparables",
                    "May 15, 2024": "Observes the tug of war between buyers and sellers of GME"
                }
            }
        },
        "AMC": {
            "summary": "Jim Cramer's tweets reveal a negative assessment of AMC, highlighting its issuance of stock to cover debt as a negative factor for its stock price.  Donald Trump does not mention AMC in his tweets.",
            "sentiment": "bearish",
            "strength": 3,
            "recentSentimentShiftsTimeline": {
                "Cramer": {
                    "May 14, 2024": "Highlights AMC's issuance of stock to cover debt as negative"
                }
            }
        },
        "BTC": {
            "summary": "Donald Trump expresses support for Bitcoin and suggests a positive outlook under his presidency, contrasting with a negative assessment of the Biden administration's approach to cryptocurrencies.",
            "sentiment": "bullish",
            "strength": 3,
            "recentSentimentShiftsTimeline": {
                "Trump": {
                    "Oct 31, 2024": "Expresses support for Bitcoin and promises to make it 'Made in the USA'"
                }
            }
        }
    }
};

// export const jsonData = {
//     "assets": {
//         "Nvidia": {
//             "recentSentimentShiftsTimeline": [
//                 {
//                     "date": "Nov 21, 2024",
//                     "shift": "Strongly bullish -  rebuttal of negative narratives, expectation of positive price target raises"
//                 },
//                 {
//                     "date": "Nov 18, 2024",
//                     "shift": "Bullish -  discrediting negative stories"
//                 },
//                 {
//                     "date": "Nov 19, 2024",
//                     "shift": "Bullish - anticipates beat and raise"
//                 }
//             ],
//             "sentiment": "Bullish",
//             "strength": 4,
//             "summary": "Jim Cramer expresses strong bullish sentiment towards Nvidia, repeatedly refuting negative narratives surrounding the company's performance and highlighting strong buyer interest. He calls out short-sellers attempting to manipulate the stock price downwards and anticipates significant positive analyst reactions."
//         },
//         "Other Stocks (Disney, Amgen, etc.):": {
//             "recentSentimentShiftsTimeline": [
//                 {
//                     "date": "Nov 24, 2024",
//                     "shift": "Neutral"
//                 },
//                 {
//                     "date": "Nov 21, 2024",
//                     "shift": "Bullish on Disney"
//                 },
//                 {
//                     "date": "Nov 19, 2024",
//                     "shift": "Bearish on Amgen, slightly bearish on PepsiCo"
//                 }
//             ],
//             "sentiment": "Neutral",
//             "strength": 1,
//             "summary": "Jim Cramer expresses mixed sentiments about various other stocks.  He's positive on Disney (specifically the Disney Treasure launch), but expresses concern about Amgen's potential hidden risk data and negativity towards PepsiCo due to a Walmart comment. His mentions of other stocks are brief and don't provide a clear overall bullish/bearish assessment."
//         },
//         "Overall Market": {
//             "recentSentimentShiftsTimeline": [
//                 {
//                     "date": "Nov 24, 2024",
//                     "shift": "Neutral (mixed positive and negative observations)"
//                 },
//                 {
//                     "date": "Nov 22, 2024",
//                     "shift": "Slightly bearish (concerns about shorting, slowing Chinese economy)"
//                 },
//                 {
//                     "date": "Nov 17, 2024",
//                     "shift": "Slightly bullish (lower rates and bullish view on Trump/Harris)"
//                 }
//             ],
//             "sentiment": "Neutral",
//             "strength": 2,
//             "summary": "Jim Cramer's tweets show a mixed sentiment towards the overall market. He criticizes excessive shorting and points to factors like lower mortgage rates as potentially positive.  He also highlights concerns about the impact of specific events like the slowing Chinese economy on market performance.  Overall, while positive aspects are noted, the negative observations and the uncertainty surrounding external factors render his overall sentiment fairly neutral."
//         },
//         "Tesla": {
//             "recentSentimentShiftsTimeline": [
//                 {
//                     "date": "Nov 24, 2024",
//                     "shift": "Neutral to slightly bullish (indirect correlation)"
//                 }
//             ],
//             "sentiment": "Bullish",
//             "strength": 2,
//             "summary": "Elon Musk's tweets show no direct mention of Tesla's stock price or performance. However, his overall positive and enthusiastic tone, coupled with mentions of SpaceX progress ('SpaceX now does this every day or so', 'More Starlinks') and his continued engagement on X, might be interpreted as indirectly bullish for Tesla, as his positive mood often correlates with a positive market sentiment towards his companies. "
//         },
//         "X (formerly Twitter)": {
//             "recentSentimentShiftsTimeline": [
//                 {
//                     "date": "Nov 24, 2024",
//                     "shift": "Neutral to slightly bearish (concerns about woke influence)"
//                 }
//             ],
//             "sentiment": "Neutral",
//             "strength": 1,
//             "summary": "Elon Musk's tweets express a mix of sentiments regarding X. While he describes it as 'unhinged', he also seems to enjoy the chaos and engage in a humorous manner.  His concerns about 'woke' influence might indicate some underlying concern about the platform's future, but the overall sentiment is hard to definitively categorize, especially without additional context."
//         }
//     }
// };