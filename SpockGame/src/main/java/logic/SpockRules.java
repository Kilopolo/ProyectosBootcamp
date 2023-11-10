package logic;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

public class SpockRules {

	private Map<Item, Map<Item, String>> rules = new HashMap<Item, Map<Item, String>>();

	public SpockRules() {
		Map<Item, String> rock = new HashMap<Item, String>();
		rock.put(Item.SCISSORS, "crushes");
		rock.put(Item.LIZARD, "crushes");
		rules.put(Item.ROCK, rock);

		Map<Item, String> spock = new HashMap<Item, String>();
		spock.put(Item.ROCK, "vaporizes");
		spock.put(Item.SCISSORS, "smashes");
		rules.put(Item.SPOCK, spock);

		Map<Item, String> paper = new HashMap<Item, String>();
		paper.put(Item.SPOCK, "disproves");
		paper.put(Item.ROCK, "covers");
		rules.put(Item.PAPER, paper);

		Map<Item, String> scissors = new HashMap<Item, String>();
		scissors.put(Item.PAPER, "cuts");
		scissors.put(Item.LIZARD, "decapitates");
		rules.put(Item.SCISSORS, scissors);

		Map<Item, String> lizard = new HashMap<Item, String>();
		lizard.put(Item.PAPER, "eats");
		lizard.put(Item.SPOCK, "poisons");
		rules.put(Item.LIZARD, lizard);

	}

	public Result getResultOf(Item fig, Item fig2) {

		Map<Item, String> figRules = getRules().get(fig);


		String action = figRules.get(fig2);
		ResultState resultState = ResultState.UNKNOWN;
		// si es igual ha empatado
		if (fig == fig2) {
			resultState = ResultState.DRAW;
			action = "draws";
		} else
		// si no o ha perdido
		if (action == null) {
			resultState = ResultState.LOSE;
			//les doy la vuelta
			Item fig1Copy = fig2;
			Item fig2Copy = fig;
			//le pido el resultado de la lucha
			action = getRules().get(fig1Copy).get(fig2Copy);
			
			return new Result(fig1Copy, fig2Copy, action, resultState);
		} else {
			// si esta es que ha ganao
			resultState = ResultState.WIN;
		}
		return new Result(fig, fig2, action, resultState);
		
	}

	public Map<Item, Map<Item, String>> getRules() {

		return Collections.unmodifiableMap(rules);
	}
}
