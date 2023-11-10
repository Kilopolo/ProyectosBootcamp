package logic;

public class Result {

	private Item fig1;
	private Item fig2;
	private String relation;
	private ResultState rs;

	public Result(Item fig1, Item fig2, String relation, ResultState rs) {
		super();
		this.fig1 = fig1;
		this.fig2 = fig2;
		this.relation = relation;
		this.rs = rs;
	}

	public Item getFig1() {
		return fig1;
	}

	public void setFig1(Item fig1) {
		this.fig1 = fig1;
	}

	public Item getFig2() {
		return fig2;
	}

	public void setFig2(Item fig2) {
		this.fig2 = fig2;
	}

	public String getRelation() {
		return relation;
	}

	public void setRelation(String relation) {
		this.relation = relation;
	}

	@Override
	public String toString() {
		return " " + fig1.name() + " " + relation + " " + fig2.name();
	}

	public boolean isWin() {
		return rs == ResultState.WIN;
	}

	public String getGameResult() {

		return rs.name();
	}

}
