package logic;

import java.util.ArrayList;
import java.util.List;

import persistence.Manager;

public class History {

	private List<Result>results = new ArrayList<>();
	private Manager manager;
	
	
	public History() {
		super();

		manager = new Manager();
		results = manager.getHistory();
	}

	public void addToHistory(Result result) {
		this.results.add(result);
		
	}

    public String getLastGame() {
        if (results.isEmpty()) {
            return null;
        } else {
            Result lastResult = results.get(results.size() - 1);
            return lastResult.toString();
        }
    }

    public int getBestStreak() {
        int currentStreak = 0;
        int bestStreak = 0;

        for (Result result : results) {
            if (result.isWin()) {
                currentStreak++;
            } else {
                currentStreak = 0;
            }

            if (currentStreak > bestStreak) {
                bestStreak = currentStreak;
            }
        }

        return bestStreak;
    }

	public List<Result> getResults() {

		return results;
	}

	public void saveAllData() {
		manager.saveAllData(this);
		
	}
    
    
}
