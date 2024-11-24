import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Calendar, ArrowUp, ArrowDown, ArrowRight } from 'lucide-react';
import { jsonData } from './data.ts';

const SentimentDashboard = () => {
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