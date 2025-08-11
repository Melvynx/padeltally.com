import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help - PadelTally",
  description: "Get help with PadelTally - Learn how to use the fastest padel scoring app for Apple Watch",
};

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Help & Support</h1>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about using PadelTally
            </p>
          </div>

          <div className="prose max-w-none">
            <h2>Getting Started</h2>
            
            <h3>Download & Setup</h3>
            <ol>
              <li>Download PadelTally from the App Store on your iPhone</li>
              <li>Open the app and follow the setup instructions</li>
              <li>The app will automatically install on your paired Apple Watch</li>
              <li>Launch PadelTally on your Apple Watch to start scoring</li>
            </ol>

            <h3>First Match</h3>
            <p>
              Starting your first match is simple:
            </p>
            <ul>
              <li>Open PadelTally on your Apple Watch</li>
              <li>Tap "New Match" to begin</li>
              <li>Choose your scoring format (standard or golden point)</li>
              <li>Start playing and tap to score!</li>
            </ul>

            <h2>Scoring</h2>

            <h3>One-Tap Scoring</h3>
            <p>
              PadelTally's main feature is one-tap scoring:
            </p>
            <ul>
              <li><strong>Tap once</strong> on your team's side to score a point</li>
              <li><strong>Feel the haptic feedback</strong> confirming the score</li>
              <li><strong>Watch the score update</strong> automatically on screen</li>
            </ul>

            <h3>Smart Game Detection</h3>
            <p>
              PadelTally automatically handles game progression:
            </p>
            <ul>
              <li>Points advance from 15-30-40 to Game automatically</li>
              <li>Deuce situations are handled correctly</li>
              <li>Sets advance automatically when games are won</li>
              <li>Match completion is detected and celebrated</li>
            </ul>

            <h3>Tie-Break & Golden Point</h3>
            <p>
              Both scoring formats are fully supported:
            </p>
            <ul>
              <li><strong>Tie-break:</strong> First to 7 points (must win by 2)</li>
              <li><strong>Golden point:</strong> Sudden death at deuce</li>
            </ul>

            <h2>Features</h2>

            <h3>Match History</h3>
            <p>
              View your complete match history in the iPhone app:
            </p>
            <ul>
              <li>See all sets, games, and total points</li>
              <li>Review match duration and timestamps</li>
              <li>Export results to share with partners or coaches</li>
              <li>Track your win/loss record over time</li>
            </ul>

            <h3>Offline Play</h3>
            <p>
              PadelTally works completely offline:
            </p>
            <ul>
              <li>No internet connection required during matches</li>
              <li>All data is stored locally on your device</li>
              <li>Sync happens automatically when connected</li>
            </ul>

            <h3>Battery Optimization</h3>
            <p>
              Designed to be battery-friendly:
            </p>
            <ul>
              <li>Lightweight interface reduces power consumption</li>
              <li>Compatible with Always-On display</li>
              <li>Optimized for extended play sessions</li>
            </ul>

            <h2>Apple Watch Compatibility</h2>

            <h3>Supported Models</h3>
            <ul>
              <li>Apple Watch Series 4 and newer</li>
              <li>Apple Watch SE (all generations)</li>
              <li>Apple Watch Ultra (all models)</li>
            </ul>

            <h3>Display Features</h3>
            <ul>
              <li>Large buttons optimized for sweaty fingers</li>
              <li>High contrast display for outdoor visibility</li>
              <li>Always-On display compatible</li>
              <li>Works with all band styles and sizes</li>
            </ul>

            <h2>Troubleshooting</h2>

            <h3>Common Issues</h3>
            
            <h4>App not appearing on Apple Watch</h4>
            <ul>
              <li>Check that your iPhone and Apple Watch are paired</li>
              <li>Ensure the iPhone app is installed first</li>
              <li>Try restarting both devices</li>
              <li>Check the Watch app on iPhone for installation status</li>
            </ul>

            <h4>Scores not syncing</h4>
            <ul>
              <li>Make sure both devices are connected</li>
              <li>Open the iPhone app to trigger sync</li>
              <li>Check that you're signed in to the same account</li>
            </ul>

            <h4>Haptic feedback not working</h4>
            <ul>
              <li>Check Apple Watch haptic settings</li>
              <li>Ensure the watch is properly fitted to your wrist</li>
              <li>Try adjusting the haptic strength in settings</li>
            </ul>

            <h2>Tips & Best Practices</h2>

            <h3>During Play</h3>
            <ul>
              <li>Keep your watch face active for quick scoring</li>
              <li>Use the haptic feedback to confirm each point</li>
              <li>Check the score display regularly to avoid disputes</li>
              <li>Take advantage of the automatic game detection</li>
            </ul>

            <h3>After Play</h3>
            <ul>
              <li>Review the match summary on your iPhone</li>
              <li>Export or share results with your playing partners</li>
              <li>Check your match history to track improvement</li>
            </ul>

            <h2>Contact Support</h2>
            
            <p>
              Need more help? We're here to assist you:
            </p>
            <ul>
              <li><strong>Email:</strong> support@padeltally.app</li>
              <li><strong>Response time:</strong> Within 24 hours</li>
            </ul>

            <p>
              When contacting support, please include:
            </p>
            <ul>
              <li>Your device model (iPhone and Apple Watch)</li>
              <li>iOS and watchOS versions</li>
              <li>Description of the issue</li>
              <li>Steps you've already tried</li>
            </ul>

            <h2>Updates & Features</h2>
            
            <p>
              PadelTally is continuously improving. Updates include:
            </p>
            <ul>
              <li>New scoring formats and tournament modes</li>
              <li>Enhanced statistics and analytics</li>
              <li>Improved Apple Watch performance</li>
              <li>Additional export and sharing options</li>
            </ul>

            <p>
              Updates are delivered automatically through the App Store.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}