import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Calendar, ArrowUp, ArrowDown, ArrowRight } from 'lucide-react';

const SentimentDashboard = () => {
    const jsonData = {
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

    const getStrengthBars = (strength, sentiment) => {
        const baseColor = sentiment === 'bullish' ? 'bg-green-500' : sentiment === 'bearish' ? 'bg-red-500' : 'bg-gray-500';

        return Array(5)
            .fill(0)
            .map((_, i) => (
                <div
                    key={i}
                    className={`w-4 h-6 rounded ${i < strength ? baseColor : 'bg-gray-200'
                        }`}
                />
            ));
    };

    const TimelineItem = ({ date, content }) => (
        <div className="flex items-start mb-4">
            <Calendar className="mr-2 flex-shrink-0 text-gray-400" size={16} />
            <div>
                <div className="font-medium">{date}</div>
                <div className="text-gray-600">{content}</div>
            </div>
        </div>
    );

    const getSentimentStyles = (sentiment) => {
        switch (sentiment.toLowerCase()) {
            case 'bullish':
                return {
                    containerClass: 'border-l-8 border-green-500 bg-green-50',
                    iconComponent: <ArrowUp size={24} className="text-green-500" />,
                    direction: 'up'
                };
            case 'bearish':
                return {
                    containerClass: 'border-l-8 border-red-500 bg-red-50',
                    iconComponent: <ArrowDown size={24} className="text-red-500" />,
                    direction: 'down'
                };
            default:
                return {
                    containerClass: 'border-l-8 border-gray-500 bg-gray-50',
                    iconComponent: <ArrowRight size={24} className="text-gray-500" />,
                    direction: 'neutral'
                };
        }
    };

    const AssetCard = ({ symbol, data }) => {
        const sentimentStyles = getSentimentStyles(data.sentiment);

        return (
            <Card className={`mb-4 ${sentimentStyles.containerClass}`}>
                <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                        <div>
                            <h3 className="text-xl font-bold">{symbol}</h3>
                            <div className="text-sm mt-1">
                                {data.sentiment.charAt(0).toUpperCase() + data.sentiment.slice(1)}
                            </div>
                        </div>
                        {sentimentStyles.iconComponent}
                    </div>
                    <div className="flex items-center space-x-1 mb-4">
                        {getStrengthBars(data.strength, data.sentiment)}
                    </div>
                    <div className="text-sm mb-4">{data.summary}</div>
                    <div>
                        <h4 className="font-medium mb-4">Recent Sentiment Shifts</h4>
                        {Object.entries(data.recentSentimentShiftsTimeline).map(([author, timeline]) => (
                            <div key={author} className="mb-4">
                                <h5 className="font-medium text-lg mb-2">{author}</h5>
                                {Object.entries(timeline).map(([date, content]) => (
                                    <TimelineItem key={date} date={date} content={content} />
                                ))}
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        );
    };

    // Separate assets by sentiment
    const bullishAssets = [];
    const bearishAssets = [];
    const neutralAssets = [];

    Object.entries(jsonData.assets).forEach(([symbol, data]) => {
        switch (data.sentiment.toLowerCase()) {
            case 'bullish':
                bullishAssets.push([symbol, data]);
                break;
            case 'bearish':
                bearishAssets.push([symbol, data]);
                break;
            default:
                neutralAssets.push([symbol, data]);
        }
    });

    return (
        <div className="p-6">
            <Card className="mb-6">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">
                        Financial Sentiment Analysis Dashboard
                    </CardTitle>
                </CardHeader>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                    <h2 className="text-xl font-bold mb-4 text-green-600">Bullish Assets</h2>
                    {bullishAssets.map(([symbol, data]) => (
                        <AssetCard key={symbol} symbol={symbol} data={data} />
                    ))}
                </div>

                <div>
                    <h2 className="text-xl font-bold mb-4 text-gray-600">Neutral Assets</h2>
                    {neutralAssets.map(([symbol, data]) => (
                        <AssetCard key={symbol} symbol={symbol} data={data} />
                    ))}
                </div>

                <div>
                    <h2 className="text-xl font-bold mb-4 text-red-600">Bearish Assets</h2>
                    {bearishAssets.map(([symbol, data]) => (
                        <AssetCard key={symbol} symbol={symbol} data={data} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SentimentDashboard;