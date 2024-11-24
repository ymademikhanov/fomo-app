import { Calendar, ArrowUp, ArrowDown, ArrowRight, Search, Loader } from 'lucide-react';
import './style.css'
import React, { useState } from 'react';
import { jsonData } from './data.ts';

const initialData = jsonData;

const SentimentDashboard = () => {
    const [searchInput, setSearchInput] = useState('elonmusk,jimcramer');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [jsonData, setJsonData] = useState(initialData);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchInput.trim()) return;

        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch('/api/sentiment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    // Add any required authentication headers here
                    // 'Authorization': 'Bearer your-token',
                },
                credentials: 'include', // Include cookies if needed
                mode: 'cors', // Enable CORS
                body: JSON.stringify({ query: searchInput }),
            });

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();
            setJsonData(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const getStrengthBars = (strength, sentiment) => {
        return Array(5)
            .fill(0)
            .map((_, i) => (
                <div
                    key={i}
                    className={`strength-bar ${i < strength ? `active ${sentiment}` : ''}`}
                />
            ));
    };

    const TimelineItem = ({ date, content }) => (
        <div className="timeline-item">
            <Calendar className="timeline-icon" size={16} />
            <div className="timeline-content">
                <div className="timeline-date">{date}</div>
                <div className="timeline-text">{content}</div>
            </div>
        </div>
    );

    const getSentimentStyles = (sentiment) => {
        switch (sentiment.toLowerCase()) {
            case 'bullish':
                return {
                    containerClass: 'bullish',
                    iconComponent: <ArrowUp size={24} className="text-green-500" />,
                };
            case 'bearish':
                return {
                    containerClass: 'bearish',
                    iconComponent: <ArrowDown size={24} className="text-red-500" />,
                };
            default:
                return {
                    containerClass: 'neutral',
                    iconComponent: <ArrowRight size={24} className="text-gray-500" />,
                };
        }
    };

    const AssetCard = ({ symbol, data }) => {
        const sentimentStyles = getSentimentStyles(data.sentiment);

        return (
            <div className={`card asset-card ${sentimentStyles.containerClass}`}>
                <div className="card-content">
                    <div className="asset-header">
                        <div>
                            <h3 className="asset-symbol">{symbol}</h3>
                            <div className="sentiment-label">
                                {data.sentiment.charAt(0).toUpperCase() + data.sentiment.slice(1)}
                            </div>
                        </div>
                        {sentimentStyles.iconComponent}
                    </div>
                    <div className="strength-bars">
                        {getStrengthBars(data.strength, data.sentiment)}
                    </div>
                    <div className="asset-summary">{data.summary}</div>
                    <div className="timeline-section">
                        <h4 className="timeline-header">Recent Sentiment Shifts</h4>
                        {Object.entries(data.recentSentimentShiftsTimeline).map(([author, timeline]) => (
                            <div key={author} className="timeline-author-section">
                                <h5 className="timeline-author">{author}</h5>
                                {Object.entries(timeline).map(([date, content]) => (
                                    <TimelineItem key={date} date={date} content={content} />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
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
        <div className="dashboard-container">
            <div className="card">
                <div className="card-header">
                    <h1 className="card-title">
                        Financial Sentiment Analysis Dashboard
                    </h1>
                </div>
            </div>

            <form onSubmit={handleSearch} className="flex space-x-2">
                <div className="relative flex-1">
                    <input
                        type="text"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        placeholder="Enter search query..."
                        className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
                </div>
                <button
                    type="submit"
                    disabled={isLoading || !searchInput.trim()}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isLoading ? (
                        <Loader className="animate-spin" size={20} />
                    ) : (
                        'Search'
                    )}
                </button>
            </form>

            {error && (
                <div className="p-4 text-red-700 bg-red-50 border border-red-200 rounded-lg">
                    {error}
                </div>
            )}

            <div className="grid-container">
                <div>
                    <h2 className="section-header bullish">Bullish Assets</h2>
                    {bullishAssets.map(([symbol, data]) => (
                        <AssetCard key={symbol} symbol={symbol} data={data} />
                    ))}
                </div>

                <div>
                    <h2 className="section-header neutral">Neutral Assets</h2>
                    {neutralAssets.map(([symbol, data]) => (
                        <AssetCard key={symbol} symbol={symbol} data={data} />
                    ))}
                </div>

                <div>
                    <h2 className="section-header bearish">Bearish Assets</h2>
                    {bearishAssets.map(([symbol, data]) => (
                        <AssetCard key={symbol} symbol={symbol} data={data} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SentimentDashboard;